import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;