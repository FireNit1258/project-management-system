const db = require('../models');
const { User, UserActivity } = db;
const { generateUniqueRandomNumber,getExpirytime,getDeviceDetails} = require('../helpers/common');
const { generate_token,decode_token} = require('../helpers/tokenhelper');

// GET ALL USERS
const getUsers = async (req, res) => {
  
    try {
      
       const users_data = await User.findAll({
          order: [
            ['id', 'DESC']
          ]
        }).then(users => {
  
          if( users ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'User data found',
                data: users
              });
                
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
          }
          
          } else {
            return res.status(200).json({
              success: false,
              message: 'User data not found with given credentials',
              data: null
            });
          }
  
        });
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
    }
  };
  
  // REGISTER USER //
  const addUser = async (req, res) => {
    
    const { name, surname, address, city, state, country, email, password } = req.body;
    // Validate if all fields are provided
    if (!name || !address || !city || !state || !country || !email || !password  ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide username, email, and password',
        data: null
      });
    }
  
    try {
      
      const user = await User.create({
        name,
        surname,
        address,
        city,
        state,
        country,
        email,
        password
      });
  
      if(user) { 
        
        try {
          
          const deviceInfo = getDeviceDetails(req.headers['user-agent']);
          await UserActivity.create({
  
              user_id: user.id,
              type: 'Register',
              device_details: JSON.stringify(deviceInfo)
  
          }).then(user_activity_data => {
      
            if( user_activity_data ) { 
              res.status(200).json({
                success: true,
                message: 'User created successfully',
                data: user_activity_data,
                });
            } else {
              return res.status(200).json({
                success: false,
                message: 'unable to write user activity data.',
                data: null
              });
            }
      
          });
      
        } catch (error) {
          // General error handler
          console.log('error',error)
          return res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
        }
  
  
      }
      
    } catch (error) {
      console.log('error',error)
      // Handle errors (e.g., validation errors or duplicate email)
      if (error.name === 'SequelizeValidationError') {
        return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
      }
  
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(200).json({
          success: false,
          message: 'Email already exists',
          data: null
        });
      }
  
      // General error handler
      res.status(200).json({
        success: false,
        message: 'An error occurred while creating the user',
        data: null
      });
    }
  };
  
  // LOGIN USER //
  const login = async (req, res) => {
    
    const { email, password } = req.body;
    
    if (!email || !password  ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide email, and password',
        data: null
      });
    }
  
    try {
      
      const user = await User.findOne({
        where: {
          email: email,
          password: password
        },
        attributes: ['id','name', 'surname', 'email']
      }).then(user => {
  
        if( user ) { 
          const user_data = { email: user.email,user_id: user.id}
          const token = generate_token(user_data);
          const loggedInUsername = user.name+ ' ' + user.surname;
          const response_data = {
            token : token,
            username : loggedInUsername
          };
  
          try {
          
            const deviceInfo = getDeviceDetails(req.headers['user-agent']);
            UserActivity.create({
    
                user_id: user.id,
                type: 'Login',
                device_details: JSON.stringify(deviceInfo)
    
            }).then(user_activity_data => {
        
              if( user_activity_data ) { 
                res.status(201).json({
                  success: true,
                  message: 'logged in successfully',
                  data: response_data,
                });
              } else {
                return res.status(200).json({
                  success: false,
                  message: 'unable to write user activity data.',
                  data: null
                });
              }
        
            });
        
          } catch (error) {
            // General error handler
            console.log('error',error)
            return res.status(200).json({
                success: false,
                message: error.message,
                data: null
              });
          }
  
          
        } else {
          return res.status(200).json({
            success: false,
            message: 'Login error ! user data not found with given credentials',
            data: null
          });
        }
  
      });
  
    } catch (error) {
      // General error handler
      console.log('error',error)
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
    }
  };
  
  // FORGOT PASSWORD //
  const forgotPassword =  async (req, res) => {
    
    const { email } = req.body;
    // Validate if all fields are provided
    if (!email ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide email',
        data: null
      });
    }
  
    try {
      
      const user = await User.findOne({
        where: {
          email: email,
        },
        attributes: ['id','name', 'surname', 'email']
      }).then(user => {
  
        if( user ) {
          
          try {
           
           const randomNum = generateUniqueRandomNumber();
           const expiry_time = getExpirytime(15); 
           data_to_send = {
                            email: user.email,
                            otp: randomNum,
                            expiry_time: expiry_time
                          };
           console.log('expiry_time',expiry_time)
  
           User.update(
            { otp: randomNum,otp_expiry_time: expiry_time },
            { where: { id: user.id } }
           ).then(([affectedRows]) => {
  
            
            console.log('affectedRows',affectedRows)
            if (affectedRows !== 0) {
              res.status(200).json({
                success: true,
                message: 'User found, please enter otp,  otp will be valid for next 15 minutes',
                data: data_to_send,
              });
            } else {
              res.status(200).json({
                success: false,
                message: 'unable to write OTP for associated user',
                data: null
              });
            }
           }).catch(error => {
            
            res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
  
           });
  
        } catch (error) {
          return res.status(200).json({
            success: false,
            message: error.message,
            data: null 
          });
        }
         
        } else {
          return res.status(200).json({
            success: false,
            message: 'User data not found with given credentials',
            data: null
          });
        }
  
      });
  
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null 
        });
    }
  };
  
  // VERIFY OTP //
  const verifyOtp=  async (req, res) => {
    
    const { email,otp } = req.body;
    // Validate if all fields are provided
    if (!email || !otp ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide email and otp',
        data: null
      });
    }
  
    try {
      
      const user = await User.findOne({
        where: {
          email: email,
          otp: otp,
        },
        attributes: ['id','name','email','otp_expiry_time']
      }).then(user => {
  
        if( user ) {
          
          try {
          
           const current_time = getExpirytime(0); 
           console.log('current_time',current_time);
           console.log('current_time',user.otp_expiry_time);
  
           if(  user.otp_expiry_time > current_time )
           {
              data_to_send = {
                email: user.email,
                name: user.name,
                id: user.id
              };
              res.status(200).json({
                success: true,
                message: 'The OTP successfully validated, please set your new password',
                data: data_to_send,
              });
  
           }
           else
           {
            res.status(200).json({
              success: false,
              message: 'Sorry! the OTP you entered is expired, please make another request from forgot password page',
              data: null
            });
           }
  
        } catch (error) {
          return res.status(200).json({
            success: false,
            message: error.message,
            data: null
          });
        }
         
        } else {
          return res.status(200).json({
            success: false,
            message: 'User data not found with given credentials',
            data: null
          });
        }
  
      });
  
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null 
        });
    }
  };
  
  // RESET PASSWORD //
  const resetPassword =  async (req, res) => {
    
    const { id,password,re_password } = req.body;
    // Validate if all fields are provided
    if (!id || !password || !re_password ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide password and re-password',
        data: null
      });
    }
  
    try {
      
      const user = await User.findOne({
        where: {
          id: id,
        },
        attributes: ['id','name','email']
      }).then(user => {
  
        if( user ) {
          
          try {
  
            if( password === re_password ) { 
  
            User.update(
              { password: password },
              { where: { id: user.id } }
             ).then(([affectedRows]) => {
                
              console.log('affectedRows',affectedRows)
              if (affectedRows !== 0) {
  
                try {
          
                  const deviceInfo = getDeviceDetails(req.headers['user-agent']);
                  UserActivity.create({
          
                      user_id: user.id,
                      type: 'Reset Password',
                      device_details: JSON.stringify(deviceInfo)
          
                  }).then(user_activity_data => {
              
                    if( user_activity_data ) { 
                      res.status(200).json({
                        success: true,
                        message: 'Great! your password has been changed, please login with new password on the site.',
                        data: user_activity_data
                      });
                    } else {
                      return res.status(200).json({
                        success: false,
                        message: 'unable to write user activity data.',
                        data: null
                      });
                    }
              
                  });
              
                } catch (error) {
                  // General error handler
                  console.log('error',error)
                  return res.status(200).json({
                      success: false,
                      message: error.message,
                      data: null
                    });
                }
  
  
               
              } else {
                res.status(200).json({
                  success: false,
                  message: 'Unable to change password, please try again',
                  data: null
                });
              }
             }).catch(error => {
              
              res.status(200).json({
                success: false,
                message: error.message,
                data: null
              });
    
             });
          } else {
            return res.status(200).json({
              success: false,
              message: 'Ahh! please check the password and confirm password, both should be the same!',
              data: null
              
            });
          }
              
        } catch (error) {
          return res.status(200).json({
            success: false,
            message: error.message,
            data: null
          });
        }
         
        } else {
          return res.status(200).json({
            success: false,
            message: 'User data not found with given credentials',
            data: null
          });
        }
  
      });
  
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
    }
  };


  
  // GET USER PROFILE // 
  const userProfile =  async (req, res) => {
    
     const user_token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    // Validate if all fields are provided
    if (!user_token ) {
      return res.status(200).json({
        success: false,
        message: 'Token is missing, please login again and try this page again.',
        data: null
      });
    }
  
    try {
      
      const token_data = decode_token(user_token);
  
      if( token_data.token_vaild == true ) { 
        const user = await User.findOne({
          where: {
            id: token_data.user_id,
          }
        }).then(user => {
  
          if( user ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'User details found !',
                data: user
              });
                
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null 
            });
          }
          
          } else {
            return res.status(200).json({
              success: false,
              message: 'User data not found with given credentials',
              data: null
            });
          }
  
        });
      } else {
        return res.status(200).json({
          success: false,
          message: token_data.message,
          data: null
        });
      }
  
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
    }
  };
  
  const userActivity = async (req, res) => {
    
    const user_token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    // Validate if all fields are provided
    if (!user_token ) {
      return res.status(200).json({
        success: false,
        message: 'Token is missing, please login again and try this page again.',
        data: null
      });
    }
  
    try {
      
      const token_data = decode_token(user_token);
  
      if( token_data.token_vaild == true ) { 
        const user_activity_data = await UserActivity.findAll({
          where: {
            user_id: token_data.user_id
          },
          order: [
            ['id', 'DESC']
          ]
        }).then(user_activity => {
  
          if( user_activity ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'User Activities found',
                data: user_activity
              });
                
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
          }
          
          } else {
            return res.status(200).json({
              success: false,
              message: 'User data not found with given credentials',
              data: null
            });
          }
  
        });
      } else {
        return res.status(200).json({
          success: false,
          message: token_data.message,
          data: null
        });
      }
  
    } catch (error) {
      return res.status(200).json({
          success: false,
          message: error.message,
          data: null
        });
    }
  };

    // GET USER PROFILE // 
    const adminUserProfile =  async (req, res) => {
    const user_token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
     // Validate if all fields are provided
     if (!user_token ) {
       return res.status(200).json({
         success: false,
         message: 'Token is missing, please login again and try this page again.',
         data: null
       });
     }
   
     try {
       
       const token_data = decode_token(user_token);
       console.log(token_data);
   
       if( token_data.token_vaild == true ) { 
        const user_id = req.params.id
         const user = await User.findOne({
           where: {
             id: user_id
           }
         }).then(user => {
   
           if( user ) {
             
             try {
   
               res.status(200).json({
                 success: true,
                 message: 'User details found !',
                 data: user
               });
                 
           } catch (error) {
             return res.status(200).json({
               success: false,
               message: error.message,
               data: null 
             });
           }
           
           } else {
             return res.status(200).json({
               success: false,
               message: 'User data not found with given credentials',
               data: null
             });
           }
   
         });
       } else {
         return res.status(200).json({
           success: false,
           message: token_data.message,
           data: null
         });
       }
   
     } catch (error) {
       return res.status(200).json({
           success: false,
           message: error.message,
           data: null
         });
     }
   };

       // UPDATE USER PROFILE //
       const updateUserProfile =  async (req, res) => {
    
        const { id,name,surname,address,city,state,country,email } = req.body;
        // Validate if all fields are provided
        if (!id || !name || !surname ) {
          return res.status(200).json({
            success: false,
            message: 'Please provide all details.',
            data: null
          });
        }
      
        try {
          
          const user = await User.findOne({
            where: {
              id: id,
            },
            attributes: ['id','name','email']
          }).then(user => {
      
            if( user ) {
              
              try {
                
                User.update(
                  { name: name,surname: surname,address: address,city: city,state: state,country: country,email: email },
                  { where: { id: user.id } }
                 ).then(([affectedRows]) => {
                    
                  console.log('affectedRows',affectedRows)
                  if (affectedRows !== 0) {
      
                    try {
              
                      const deviceInfo = getDeviceDetails(req.headers['user-agent']);
                      UserActivity.create({
              
                          user_id: user.id,
                          type: 'Update Profile',
                          device_details: JSON.stringify(deviceInfo)
              
                      }).then(user_activity_data => {
                  
                        if( user_activity_data ) { 
                          res.status(200).json({
                            success: true,
                            message: 'Great! profile has been updated successfully.',
                            data: user_activity_data
                          });
                        } else {
                          return res.status(200).json({
                            success: false,
                            message: 'unable to write user activity data.',
                            data: null
                          });
                        }
                  
                      });
                  
                    } catch (error) {
                      // General error handler
                      console.log('error',error)
                      return res.status(200).json({
                          success: false,
                          message: error.message,
                          data: null
                        });
                    }
      
      
                   
                  } else {
                    res.status(200).json({
                      success: false,
                      message: 'Unable to update profile, please try again',
                      data: null
                    });
                  }
                 }).catch(error => {
                  
                  res.status(200).json({
                    success: false,
                    message: error.message,
                    data: null
                  });
        
                 });
             
                  
            } catch (error) {
              return res.status(200).json({
                success: false,
                message: error.message,
                data: null
              });
            }
             
            } else {
              return res.status(200).json({
                success: false,
                message: 'User data not found with given credentials',
                data: null
              });
            }
      
          });
      
        } catch (error) {
          return res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
        }
      };


      const deleteUserProfile =  async (req, res) => {
    
        const { id } = req.body;
        // Validate if all fields are provided
        try {
          const deletedUserCount = await User.destroy({ where: { id: id } });
      
          if (deletedUserCount === 0) {
            return res.status(200).json({
              success: false,
              message: 'User not found in database to delete',
              data: null
            });
          }
      
          return res.status(200).json({
            success: true,
            message: 'User has been deleted successfully!',
            data: null
          });

        } catch (error) {
          return res.status(200).json({
            success: false,
            message: error.message,
            data: null
          });
        }

      };

      const updatePassword =  async (req, res) => {
    
        const { id,password } = req.body;
        try {
          User.update(
            { password },
            { where: { id: id } }
           ).then(([affectedRows]) => {
              
            console.log('affectedRows',affectedRows)
            if (affectedRows !== 0) {
              res.status(200).json({
                success: true,
                message: 'Great! password has been changed!',
                data: null
              });
            } else {
              res.status(200).json({
                success: false,
                message: 'Something is going wrong!',
                data: null
              });

            }
           }).catch(error => {
            
            res.status(200).json({
              success: false,
              message: error.message,
              data: null
            });
  
           });

        } catch (error) {
          return res.status(200).json({
            success: false,
            message: error.message,
            data: null
          });
        }

      };




  module.exports = {
    getUsers,
    addUser,
    login,
    forgotPassword,
    verifyOtp,
    resetPassword,
    userProfile,
    userActivity,
    adminUserProfile,
    updateUserProfile,
    deleteUserProfile,
    updatePassword
  };