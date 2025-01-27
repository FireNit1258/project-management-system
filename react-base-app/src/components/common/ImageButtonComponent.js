import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


function ImageButtonComponent(props) {

  const { 
    boxHeading = 'Select Image',
    boxWidth = 150,
    boxHeight = 150,
    imageName='image',
    handleImageChange,
    handleRemoveImage,
    selectedImage,
    previewUrl
   } = props;


  




  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h6">{boxHeading}</Typography>

      {/* Display Image Preview */}
      {previewUrl && (
        <Box
          component="img"
          src={previewUrl}
          alt="Preview"
          sx={{
            width: boxWidth,
            height: boxHeight,
            borderRadius: '10px',
            objectFit: 'cover',
            mb: 2,
          }}
        />
      )}

      {/* Upload Button */}
      <Button
        variant="contained"
        component="label"
        startIcon={<PhotoCamera />}
      >
        {selectedImage ? 'Change Image' : 'Upload Image'}
        <input
          type="file"
          name={imageName}
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>

      {/* Remove Image Button */}
      {selectedImage && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleRemoveImage}
        >
          Remove Image
        </Button>
      )}
    </Box>
  );

}






export default ImageButtonComponent;
