import { Box, Button, Grid, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
function MultipleImageUploadComponent(props) {
   
  const { images,
    handleImageChange,
    handleRemoveImage,
    buttonText = '',
    style,
    imageName
  } = props;


  return (
    <Box>
      
      <Button
        variant="contained"
        component="label"
        style={style}
        startIcon={<ImageIcon />}
      >
        {buttonText}
        <input
          type="file"
          name={imageName}
          multiple
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>

      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <Box
              position="relative"
              borderRadius="8px"
              overflow="hidden"
              style={{ position: 'relative' }}
            >
              <img
                src={image.preview}
                alt={`preview-${index}`}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <IconButton
                onClick={() => handleRemoveImage(index)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MultipleImageUploadComponent;
