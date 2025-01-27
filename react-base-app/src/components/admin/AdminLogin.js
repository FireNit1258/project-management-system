import React, { useState } from 'react';
import { Avatar, Box, Typography, Container, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from '../common/TextInputComponent';
import AlertComponent from '../common/AlertComponent';
import { adminLogin } from '../../services/apiService';
import { useAdminUser } from "./admincontext/AdminUserContext";

function AdminLogin() {

    const { setAdminUser } = useAdminUser();


    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login_email: '',
        login_password: ''
      });
    
    const [alertData, setAlertData] = useState({
      alert_show: false,
      alert_message: '',
      alert_title: '',
      alert_type: ''
    });
   

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,  // Keep previous form data intact
          [name]: value // Update the specific input field value
        }));
      };

      const loginAdminUser = async (loginData) => {
        const response = await adminLogin(loginData);
        if (response) {
          if(response.success === true) {

            setAlertData(() => ({
              alert_show: true,
              alert_message:response.message,
              alert_title: 'Success!',
              alert_type: 'success'
            }));

            console.log('response.data',response.data)
            
            setAdminUser({
              username: response.data.username
            })
            // store token is local storage
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('admin_username', response.data.username);

            // navigate to dashboard
            navigate('/admin/dashboard');
            
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



      const SubmitLoginForm = () => {
        const api_request_data = {
          email: formData.login_email,
          password: formData.login_password
        };
        loginAdminUser(api_request_data);
        
      };




    return (
        <Container component="main" maxWidth="xs">
           
        <AlertComponent show={alertData.alert_show} severity = {alertData.alert_type} variant = 'filled' color={alertData.alert_type} alerttitle={alertData.alert_title} alertmessagetext={alertData.alert_message} />
      
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              id="login_email"
              label="Email address"
              name="login_email"
              autoComplete="email"
              autoFocus
              handleChange={handleFieldChange}
              value={formData.login_email}
            />
            <TextInputComponent
              margin="normal"
              required
              fullWidth
              name="login_password"
              label="Password"
              type="password"
              id="login_password"
              autoComplete="current-password"
              handleChange={handleFieldChange}
              value={formData.login_password}
            />
           
            <ButtonComponent
                buttonLabel="Login"
                buttonColor = "primary"
                buttonSize = "large"
                buttonVariant = "contained"
                clickHandler = {SubmitLoginForm}
                />
             
          </Box>
        </Box>
       
      </Container>
    );
  }
  export default AdminLogin;  
