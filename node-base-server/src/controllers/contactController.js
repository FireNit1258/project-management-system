const db = require('../models');
const { Contact } = db;
// GET ALL USERS
const getContactRecords = async (req, res) => {
  
    try {
      
       const pages_data = await Contact.findAll({
          order: [
            ['id', 'DESC']
          ]
        }).then(pages => {
  
          if( pages ) {
            
            try {
  
              res.status(200).json({
                success: true,
                message: 'Contact data found',
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
  const addContactRecords = async (req, res) => {
    
    const { name,
        email,
        subject,
        message } = req.body;
    // Validate if all fields are provided
    if (!name || !email || !subject || !message  ) {
      return res.status(200).json({
        success: false,
        message: 'Please provide all details',
        data: null
      });
    }
  
    try {
      
      const page = await Contact.create({
        name,
        email,
        subject,
        message
      });
  
      if(page) { 
        
        res.status(200).json({
            success: true,
            message: 'Your message submitted successfully',
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
  




      const deleteContactRecord =  async (req, res) => {
    
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





  module.exports = {
    getContactRecords,
    addContactRecords,
    deleteContactRecord,
  };