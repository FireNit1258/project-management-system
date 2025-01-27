import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid2';
import {  contactUsSubmit } from "../services/apiService";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
  } from "@mui/material";

  import {  getFrontWebsiteSettings } from "../services/apiService";





export default function MainContent() {

    const [websiteData, setWebsiteData] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });



    useEffect(() => {
        getWebsiteData();
       
      }, []);


      const getWebsiteData = async () => {
   
        try {
          const response = await getFrontWebsiteSettings();
          if (response) {
            if (response.success === true) {
              setWebsiteData(response.data);
            } 
          }
        } catch (err) {
         console.log(err)
        } 
      };

      

      const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,  // Keep previous form data intact
          [name]: value // Update the specific input field value
        }));
      };



      const submitUpdateForm = async () => {
   
        try {
            const api_request_data = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
              };
          const response = await contactUsSubmit(api_request_data);
          if (response) {
            if (response.success === true) {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                  });
              alert(response.message);
            } else {
              alert(response.message);
            }
          }
    
    
        } catch (err) {
         console.log(err)
        } 
      };
    
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom textAlign="center">
        Contact Us
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
        Have questions or comments? We’d love to hear from you!
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 3,
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {/* Name Field */}
        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          required
          name="name"
          id="name"
          onChange={handleFieldChange}
          value={formData.name}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          required
          name="email"
          id="email"
          onChange={handleFieldChange}
          value={formData.email}
        />

        {/* Subject Field */}
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          name="subject"
          id="subject"
          onChange={handleFieldChange}
          value={formData.subject}
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Your Message"
          variant="outlined"
          rows={5}
          required
          name="message"
          id="message"
          onChange={handleFieldChange}
          value={formData.message}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={submitUpdateForm}
          sx={{ alignSelf: "flex-start" }}
        >
          Submit
        </Button>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Get in Touch
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
            <strong>Address:</strong> {websiteData.website_address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"> <strong>Phone:</strong> {websiteData.website_phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1"><strong>Email:</strong>: {websiteData.website_phone}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}
