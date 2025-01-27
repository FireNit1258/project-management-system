const db = require('../models');
const { NewsletterSubscribers } = db;
// GET ALL USERS
const getNesletterEmails = async (req, res) => {
  
    try {
      
       const email_data = await NewsletterSubscribers.findAll({
          order: [
            ['id', 'DESC']
          ]
        }).then(email_data => {
  
          if( email_data ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'newsletter emails data found',
                data: email_data
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
  const addNewsletterEmail = async (req, res) => {
    
    const { email } = req.body;
    // Validate if all fields are provided
    if (!email ) {
      return res.status(200).json({
        success: false,
        message: 'Please valid email address',
        data: null
      });
    }
  
    try {
      
      const add_done = await NewsletterSubscribers.create({
        email
      });
  
      if(add_done) { 
        
        res.status(200).json({
            success: true,
            message: 'Great! you have subscribed sucessfully',
            data: add_done,
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
  

      const deleteNewsletterEmail =  async (req, res) => {
    
        const { id } = req.body;
        // Validate if all fields are provided
        try {
          const deletedPageCount = await NewsletterSubscribers.destroy({ where: { id: id } });
      
          if (deletedPageCount === 0) {
            return res.status(200).json({
              success: false,
              message: 'Email not found in database to delete',
              data: null
            });
          }
      
          return res.status(200).json({
            success: true,
            message: 'email has been deleted successfully!',
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





  module.exports = {
    getNesletterEmails,
    addNewsletterEmail,
    deleteNewsletterEmail
  };