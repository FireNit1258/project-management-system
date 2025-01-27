
import React, { useState, useEffect } from "react";
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import {  getFrontWebsiteSettings } from "../services/apiService";
import { useNavigate,useLocation } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {

  const location = useLocation();
  const openedPath = location.pathname;
  const navigate = useNavigate();

  const menu_arr = ['projects','categories','about-us','terms-and-conditions','privacy-policy','contact-us'];
  let selected_menu = 'projects';
  for (let i = 0; i < menu_arr.length; i++) {
    let matched = openedPath.match(menu_arr[i]);
    if(matched) {
      selected_menu = menu_arr[i];
    }
  }

  const [open, setOpen] = useState(false);
  const [websiteData, setWebsiteData] = useState([]);

  useEffect(() => {
    getWebsiteData();
  }, []);



  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

          <Link href="/">
            <img src={process.env.REACT_APP_API_URL+'uploads/'+websiteData.website_logo} alt={websiteData.website_name} style={{ width:150}}  />
        </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" onClick={() => navigate('/projects')} sx={ selected_menu==='projects' ? { bgcolor: '#eeeeee' } : {}} >
              Pojects
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => navigate('/categories')} sx={ selected_menu==='categories' ? { bgcolor: '#eeeeee' } : {}}>
              Categories
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => navigate('/page/about-us')}  sx={ selected_menu==='about-us' ? { bgcolor: '#eeeeee' } : {}} >
              About us
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => navigate('/page/terms-and-conditions')}  sx={ selected_menu==='terms-and-conditions' ? { bgcolor: '#eeeeee' } : {}} >
              Terms & Conditions
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => navigate('/page/privacy-policy')} sx={ selected_menu==='privacy-policy' ? { bgcolor: '#eeeeee' } : {}}>
              Privacy Policy
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => navigate('/contact-us')} sx={ selected_menu==='contact-us' ? { bgcolor: '#eeeeee' } : {}}>
              Contact Us
              </Button>
            </Box>
          </Box>
          
          { websiteData.show_theme_mode	=== '1' ?
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
           
            <ColorModeIconDropdown />
          </Box>
          : null }


          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={() => navigate('/projects')}>Pojects</MenuItem>
                <MenuItem onClick={() => navigate('/categories')}>Categories</MenuItem>
                <MenuItem onClick={() => navigate('/about-us')}>About us</MenuItem>
                <MenuItem onClick={() => navigate('/terms-and-conditions')}>Terms & Conditions</MenuItem>
                <MenuItem  onClick={() => navigate('/privacy-policy')}>Privacy Policy</MenuItem>
                <MenuItem onClick={() => navigate('/contact-us')}>Contact Us</MenuItem>
                <Divider sx={{ my: 3 }} />
                
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
