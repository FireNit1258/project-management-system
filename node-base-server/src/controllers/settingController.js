const db = require("../models");
const { Settings } = db;
const { generate_token, decode_token } = require("../helpers/tokenhelper");





// GET SINGLE CATEGORY //
const getSettings = async (req, res) => {
  console.log(req);
  const user_token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];
  // Validate if all fields are provided
  if (!user_token) {
    return res.status(200).json({
      success: false,
      message: "Token is missing, please login again and try this page again.",
      data: null,
    });
  }

  try {
    const token_data = decode_token(user_token);
    console.log(token_data);

    if (token_data.token_vaild == true) {
      const {id} = req.body;
      const setting_data = await Settings.findOne({
        where: {
          id: id,
        },
      }).then((setting_data) => {
        if (setting_data) {
          try {
            res.status(200).json({
              success: true,
              message: "Settings details found !",
              data: setting_data,
            });
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null,
            });
          }
        } else {
          return res.status(200).json({
            success: false,
            message: "category data not found with given credentials",
            data: null,
          });
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: token_data.message,
        data: null,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};






const updateSettings =  async (req, res) => {
    


  const { id,website_name,website_global_meta_title,website_global_meta_keywords,website_logo,copyright_text,admin_list_page_size,front_list_page_size,from_email,from_name,website_address,website_email,website_phone,site_on,site_down_message } = req.body;
  console.log('site_on',site_on)
  // Validate if all fields are provided
  if (!id || !website_name ) {
    return res.status(200).json({
      success: false,
      message: 'Please provide all details.',
      data: null
    });
  }

  try {
    
    const settings_data = await Settings.findOne({
      where: {
        id: id,
      },
      attributes: ['id']
    }).then(settings_data => {

      if( settings_data ) {
        
        try {
          
          Settings.update(
            { website_name,website_global_meta_title,website_global_meta_keywords,website_logo,copyright_text,admin_list_page_size,front_list_page_size,from_email,from_name,website_address,website_email,website_phone,site_on,site_down_message},
            { where: { id: settings_data.id } }
           ).then(([affectedRows]) => {
              
            console.log('affectedRows',affectedRows)
            if (affectedRows !== 0) {

              res.status(200).json({
                success: true,
                message: 'Great! settings has been updated successfully.',
                data: settings_data
              });


             
            } else {
              res.status(200).json({
                success: false,
                message: 'Unable to update settings, please try again',
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


const getFrontWebsiteSettings = async (req, res) => {


  try {

      const setting_data = await Settings.findOne({
        where: {
          id: 1,
        },
      }).then((setting_data) => {
        if (setting_data) {
          try {
            res.status(200).json({
              success: true,
              message: "Settings details found !",
              data: setting_data,
            });
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null,
            });
          }
        } else {
          return res.status(200).json({
            success: false,
            message: "category data not found with given credentials",
            data: null,
          });
        }
      });
    
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};


module.exports = {
  getSettings,
  updateSettings,
  getFrontWebsiteSettings
};
