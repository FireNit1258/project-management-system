import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import { getAdminCategory,addAdminCategory } from "../../services/apiService";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate,useParams } from 'react-router-dom';
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from '../common/TextInputComponent';
import AlertComponent from '../common/AlertComponent';
import ImageButtonComponent from '../common/ImageButtonComponent';


function AdminCreateCategory() {


    // image processing code //
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

 // end image processing code //



  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    setLoading(true);
    try {
      const response = await getAdminCategory();
      if (response) {
        if (response.success === true) {
            setCategoryData(response.data);
          setLoading(false);
        } else {
          setAlertData(() => ({
            alert_show: true,
            alert_message: response.message,
            alert_title: "Failed!",
            alert_type: "error",
          }));
          setLoading(false);
        }
      }
    } catch (err) {
      setAlertData(() => ({
        alert_show: true,
        alert_message: err.message,
        alert_title: "Failed!",
        alert_type: "error",
      }));
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  };





  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

 



  const [formData, setFormData] = useState({
    name: '',
    parent_id: '',
    display_order: '',
  });


  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Keep previous form data intact
      [name]: value // Update the specific input field value
    }));
  };

  const submitUpdateForm = (event) => {
    event.preventDefault();

    const api_request_data = {
      name: formData.name,
      parent_id: formData.parent_id,
      display_order: formData.display_order,
    };
    addData(api_request_data,selectedImage);
    
  };

  const cancelForm = () => {
    
    navigate('/admin/category');
  };

  

  const addData = async (apiData,selectedImage) => {
    const response = await addAdminCategory(apiData,selectedImage);
    if (response) {
      if(response.success === true) {

        setAlertData(() => ({
          alert_show: true,
          alert_message:response.message,
          alert_title: 'Success!',
          alert_type: 'success'
        }));
        cancelForm()
              
      } else {
        setAlertData(() => ({
          alert_show: true,
          alert_message:response.message,
          alert_title: 'Failed!',
          alert_type: 'error'
        }));
      }

    }
  };




  return (
    <Box sx={{ display: "flex" }}>

      <TopAdminBarComponents />
      <AdminSideMenuComponents />
      
      <Typography variant="h6" sx={{ marginBottom: "8px", fontWeight: "bold" }}>
        Update User
      </Typography>
      <Box sx={{ marginTop: 10, display: "flex" }}  display="flex" justifyContent="center"      alignItems="center" minHeight="80vh">
      {loading ? (
        <CircularProgress color="primary" size={60} thickness={5} />
      ) : (

       
        <Box component="form"  noValidate sx={{ width: '75%'  }}>
           <AlertComponent show={alertData.alert_show} severity = {alertData.alert_type} variant = 'filled' color={alertData.alert_type} alerttitle={alertData.alert_title} alertmessagetext={alertData.alert_message} />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              id="name"
              label="Category Name"
              name="name"
              autoComplete="name"
              autoFocus
              handleChange={handleFieldChange}
              value={formData.name}
            />

<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.parent_id}
          label="Age"
          fullWidth
          
          onChange={handleFieldChange}
          name="parent_id"
        >

{categoryData.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
            </MenuItem>
        ))}
        
        </Select>








<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="display_order"
              label="Display Order"
              id="display_order"
              handleChange={handleFieldChange}
              value={formData.display_order}
            />

<br />

            <ImageButtonComponent boxHeading="Select category image" boxWidth={250} boxHeight={250} imageName="image" handleImageChange={handleImageChange} handleRemoveImage={handleRemoveImage} selectedImage={selectedImage} previewUrl={previewUrl} />

            <br /><br /><br />
           
            <ButtonComponent
                buttonLabel="Add Category"
                buttonColor = "primary"
                buttonSize = "large"
                buttonVariant = "contained"
                clickHandler = {submitUpdateForm}
                />
                <ButtonComponent
                buttonLabel="Cancel"
                buttonColor = "secondary"
                buttonSize = "large"
                buttonVariant = "contained"
                clickHandler = {cancelForm}
                />
             
          </Box>
      
      )}
      </Box>


      
    </Box>
  );
}
export default AdminCreateCategory;
