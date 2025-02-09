import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TopAdminBarComponents from "./common/TopAdminBarComponents";
import AdminSideMenuComponents from "./common/AdminSideMenuComponents";
import { getAdminUserProfile,addAdminUserProfile } from "../../services/apiService";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate,useParams } from 'react-router-dom';
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from '../common/TextInputComponent';
import AlertComponent from '../common/AlertComponent';


function AdminAddUserData() {

  const navigate = useNavigate();



  const [loading, setLoading] = useState(false);
  const [alertData, setAlertData] = useState({
    alert_show: false,
    alert_message: "",
    alert_title: "",
    alert_type: "",
  });

 



  const [formData, setFormData] = useState({
    project_name: '',
    category_id: '',
    project_description: '',
    project_technology: '',
    project_short_description: '',
    completed_duration: '',
    display_order: ''
  });


  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Keep previous form data intact
      [name]: value // Update the specific input field value
    }));
  };

  const submitUpdateForm = () => {
    const api_request_data = {
      name: formData.name,
      surname: formData.surname,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      email: formData.email,
      password: formData.password
    };

    console.log('api_request_data',api_request_data)
    addProfile(api_request_data);
    
  };

  const cancelForm = () => {
    
    navigate('/admin/users');
  };

  

  const addProfile = async (apiData) => {
    const response = await addAdminUserProfile(apiData);
    if (response) {
      if(response.success === true) {

        setAlertData(() => ({
          alert_show: true,
          alert_message:response.message,
          alert_title: 'Success!',
          alert_type: 'success'
        }));
        setFormData([]);
              
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
              label="First Name"
              name="name"
              autoComplete="name"
              autoFocus
              handleChange={handleFieldChange}
              value={formData.name}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="surname"
              label="surname"
              id="surname"
              autoComplete="surname"
              handleChange={handleFieldChange}
              value={formData.surname}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              id="address"
              multiline
              rows={4}  
              variant="outlined" 
              autoComplete="address"
              handleChange={handleFieldChange}
              value={formData.address}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              id="city"
              autoComplete="city"
              handleChange={handleFieldChange}
              value={formData.city}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="state"
              label="State"
              id="state"
              autoComplete="state"
              handleChange={handleFieldChange}
              value={formData.state}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="country"
              label="Country"
              id="country"
              autoComplete="country"
              handleChange={handleFieldChange}
              value={formData.country}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="email"
              handleChange={handleFieldChange}
              value={formData.email}
            />

<TextInputComponent
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type="password"
              handleChange={handleFieldChange}
              value={formData.password}
            />


           
            <ButtonComponent
                buttonLabel="Add User"
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
export default AdminAddUserData;
