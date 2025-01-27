const db = require('../models');
const { Pages } = db;
// GET ALL USERS
const getPages = async (req, res) => {
  
    try {
      
       const pages_data = await Pages.findAll({
          order: [
            ['id', 'DESC']
          ]
        }).then(pages => {
  
          if( pages ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'Pages data found',
                data: pages
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
              message: 'Page data not found with given credentials',
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
  const addPage = async (req, res) => {
    
    const { page_title, page_short_description, page_description } = req.body;
    // Validate if all fields are provided
    if (!page_title || !page_short_description || !page_description  ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide all details',
        data: null
      });
    }
  
    try {
      
      const page = await Pages.create({
        page_title,
        page_short_description,
        page_description
      });
  
      if(page) { 
        
        res.status(200).json({
            success: true,
            message: 'Page created successfully',
            data: page,
            });
  
  
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
  


    // GET USER PROFILE // 
    const adminPageDetail =  async (req, res) => {
   
     try {
       
        const id = req.params.id
         const page = await Pages.findOne({
           where: {
             id: id
           }
         }).then(page => {
   
           if( page ) {
             
             try {
   
              return res.status(200).json({
                 success: true,
                 message: 'Page details found !',
                 data: page
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
               message: 'Page data not found with given credentials',
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

       // UPDATE USER PROFILE //
       const updatePage =  async (req, res) => {
    
        const { id,page_title,page_short_description,page_description } = req.body;
        // Validate if all fields are provided
        if (!id || !page_title || !page_short_description || !page_description  ) {
          return res.status(200).json({
            success: false,
            message: 'Please provide all details.',
            data: null
          });
        }
      
        try {
          
          const page = await Pages.findOne({
            where: {
              id: id,
            },
            attributes: ['id']
          }).then(page => {
      
            if( page ) {
              
              try {
                
                Pages.update(
                  { page_title:page_title,page_short_description:page_short_description,page_description:page_description  },
                  { where: { id: page.id } }
                 ).then(([affectedRows]) => {
                    
                  if (affectedRows !== 0) {
      
                    res.status(200).json({
                        success: true,
                        message: 'Great! Page has been updated successfully.',
                        data: null
                      });
      
                   
                  } else {
                    res.status(200).json({
                      success: false,
                      message: 'Unable to update page, please try again',
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
                message: 'page data not found with given credentials',
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


      const deletePage =  async (req, res) => {
    
        const { id } = req.body;
        // Validate if all fields are provided
        try {
          const deletedPageCount = await Pages.destroy({ where: { id: id } });
      
          if (deletedPageCount === 0) {
            return res.status(200).json({
              success: false,
              message: 'Page not found in database to delete',
              data: null
            });
          }
      
          return res.status(200).json({
            success: true,
            message: 'Page has been deleted successfully!',
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

    const frontPageDetail =  async (req, res) => {
   
     try {
       
        const id = req.params.id
         const page = await Pages.findOne({
           where: {
             id: id
           }
         }).then(page => {
   
           if( page ) {
             
             try {
   
              return res.status(200).json({
                 success: true,
                 message: 'Page details found !',
                 data: page
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
               message: 'Page data not found with given credentials',
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



  module.exports = {
    getPages,
    addPage,
    adminPageDetail,
    updatePage,
    deletePage,
    frontPageDetail
  };