import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';
import {  getFrontWebsiteSettings } from "../services/apiService";
import { useNavigate } from 'react-router-dom';
import {  getFrontProjects,getFrontCategories,emailSubscription } from "../services/apiService";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  const navigate = useNavigate();
  
  const [websiteData, setWebsiteData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subscribeEmail, setSubscribeEmail] = useState(null);


  useEffect(() => {
    getWebsiteData();
    getProjectData('featured');
    getCategoryData();
  }, []);

  const getProjectData = async (filter) => {
   
    try {
      const response = await getFrontProjects(filter);
      if (response) {
        if (response.success === true) {
            setProjectData(response.data);
        } 
      }
    } catch (err) {
     console.log(err)
    } 
  };



  const getCategoryData = async () => {
   
    try {
      const response = await getFrontCategories();
      if (response) {
        if (response.success === true) {
          setCategoryData(response.data);
        } 
      }
    } catch (err) {
     console.log(err)
    } 
  };






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

  const submitSubscribeForm = async () => {
   
    try {
      let api_data = {email: subscribeEmail };
      const response = await emailSubscription(api_data);
      if (response) {
        if (response.success === true) {
          setSubscribeEmail(null);
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
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <img src={process.env.REACT_APP_API_URL+'uploads/'+websiteData.website_logo} alt={websiteData.website_name} style={{ width:150}} onClick={() => navigate('/')} />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Join the newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Subscribe for weekly updates. No spams ever!
              </Typography>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Enter your email address',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => submitSubscribeForm()} 
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Featured Projects
            </Typography>
            {projectData.map((item) => (
            <Link color="text.secondary" variant="body2" href="#">
              {item.project_name}
            </Link>
            ))}

          
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Featured Category
            </Typography>

            {categoryData.map((item) => (
            <Link color="text.secondary" variant="body2" href="#">
              {item.name}
            </Link>
            ))}


           
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              Sitemap
            </Typography>
            
            <Link color="text.secondary" variant="body2" href="/projects">
              Projects
            </Link>
            <Link color="text.secondary" variant="body2" href="/categories">
              Categories
            </Link>
            <Link color="text.secondary" variant="body2" href="/page/about-us">
              About Us
            </Link>
            <Link color="text.secondary" variant="body2" href="/contact-us">
              Contact Us
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Link color="text.secondary" variant="body2" href="/page/privacy-policy">
              Privacy Policy
            </Link>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="/page/terms-and-conditions">
              Terms of Service
            </Link>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {'Copyright © '}
          <Link color="text.secondary" href="/">
          {websiteData.website_name}
          </Link>
          &nbsp;
          {new Date().getFullYear()}
          </Typography>
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href={websiteData.facebook_link}
              aria-label="Facebook"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href={websiteData.twitter_link}
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href={websiteData.youtube_link}
              aria-label="Youtube"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
