// routes/uploadRoute.js
const express = require('express');
const router = express.Router();

// Import the upload helper
const singleImageUpload = require('../helpers/uploadHelper');

// Define the image upload route
router.post('/upload-image', (req, res) => {
  singleImageUpload(req, res, (err) => {
    if (err) {
        return res.status(200).json({
            success: false,
            message:  err.message,
            data: null,
          });
     
    }

    if (!req.file) {
        return res.status(200).json({
            success: false,
            message:  'No file uploaded',
            data: null,
          });
    }

    res.status(200).json({
        success: true,
        message:  'Image uploaded successfully',
        data: `/public/uploads/${req.file.filename}`
      });



   
  });
});

module.exports = router;
