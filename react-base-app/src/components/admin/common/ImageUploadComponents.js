import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Clear the selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h6">Upload an Image</Typography>

      {/* Display Image Preview */}
      {previewUrl && (
        <Box
          component="img"
          src={previewUrl}
          alt="Preview"
          sx={{
            width: 150,
            height: 150,
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
};

export default ImageUploadComponent;
