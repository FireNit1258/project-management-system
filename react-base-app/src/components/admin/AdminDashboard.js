import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminLoggedIn } from '../../utils/helper';
import {  Box } from '@mui/material';

import TopAdminBarComponents from './common/TopAdminBarComponents';
import AdminSideMenuComponents from './common/AdminSideMenuComponents';
import AdminGraphData from './AdminGraphData';


function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if(isAdminLoggedIn() === false) {
      navigate('/admin/login');
    }
  });

    return (
      
      <Box sx={{ display: 'flex' }}>
      <TopAdminBarComponents />
      <AdminSideMenuComponents />
       <AdminGraphData />
      </Box>
    );
  }
  export default AdminDashboard;  
