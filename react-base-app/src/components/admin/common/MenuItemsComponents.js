import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from '@mui/icons-material/Dashboard';
import People from '@mui/icons-material/People';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Category from '@mui/icons-material/Category';
import PagesIcon from '@mui/icons-material/Pages';
import ViewCarousel from '@mui/icons-material/ViewCarousel';
import DialogBoxComponent from "../../common/DialogBoxComponent";

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function MenuItemsComponents(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location',location);

  const openedPath = location.pathname;

  const menu_arr = ['dashboard','user','category','project','page','settings'];
  let selected_menu = 'dashboard';
  for (let i = 0; i < menu_arr.length; i++) {
    let matched = openedPath.match(menu_arr[i]);
    if(matched) {
      selected_menu = menu_arr[i];
    }
  }


  const [dialogOpen, setDialogOpen] = useState(false);

  const confirmLogout = () => {
    setDialogOpen(true);

  };


  const cancelFunction = () => {
    setDialogOpen(false);
  };

  const confirmDoLogout = () => {
    setDialogOpen(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('admin_username');
    navigate('/admin/login');
  };

  return (
    <>
    <DialogBoxComponent opendialog={dialogOpen}  oncancelfunction={cancelFunction} onconfirmfunction={confirmDoLogout} alerttitle="Are you sure?" alertmessagetext="Are you sure, you want to logout from admin panel ?" okbuttontext="Yes, Logout" cancelbuttontext="No, cancel"    />
    <List>
    <ListItem key="dashboard" disablePadding onClick={() => navigate('/admin/dashboard')} sx={ selected_menu==='dashboard' ? { bgcolor: '#eeeeee' } : {}} >
      <ListItemButton>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
    <ListItem key="users" disablePadding onClick={() => navigate('/admin/users')} sx={ selected_menu==='user' ? { bgcolor: '#eeeeee' } : {}}>
      <ListItemButton>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Admin Users" />
      </ListItemButton>
    </ListItem>

    <ListItem key="category" disablePadding onClick={() => navigate('/admin/category')} sx={ selected_menu==='category' ? { bgcolor: '#eeeeee' } : {}}>
      <ListItemButton>
        <ListItemIcon>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Category" />
      </ListItemButton>
    </ListItem>

    <ListItem key="projects" disablePadding onClick={() => navigate('/admin/projects')} sx={ selected_menu==='project' ? { bgcolor: '#eeeeee' } : {}}>
      <ListItemButton>
        <ListItemIcon>
          <ViewCarousel />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
    </ListItem>

    <ListItem key="pages" disablePadding onClick={() => navigate('/admin/pages')} sx={ selected_menu==='page' ? { bgcolor: '#eeeeee' } : {}}>
      <ListItemButton>
        <ListItemIcon>
          <PagesIcon />
        </ListItemIcon>
        <ListItemText primary="Static Pages" />
      </ListItemButton>
    </ListItem>



    <ListItem key="Settings" disablePadding onClick={() => navigate('/admin/settings')} sx={ selected_menu==='settings' ? { bgcolor: '#eeeeee' } : {}}>
      <ListItemButton>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </ListItem>

    <ListItem key="logout" disablePadding onClick={confirmLogout}>
      <ListItemButton>
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </ListItem>
 
     </List>
     </>
  );
}

export default MenuItemsComponents;
