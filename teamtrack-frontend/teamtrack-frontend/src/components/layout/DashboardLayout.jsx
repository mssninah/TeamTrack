import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

import { Box } from '@mui/material';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        minWidth: 0
      }}>
        <Header />
        
        <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default DashboardLayout;