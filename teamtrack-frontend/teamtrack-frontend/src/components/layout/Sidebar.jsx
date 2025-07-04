import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  useTheme
} from '@mui/material';
import {
  SportsBasketball,
  Payments,
  CreditCard,
  Dashboard,
  Settings,
  Group
} from '@mui/icons-material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ClubAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  backgroundColor: theme.palette.primary.main,
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&.active': {
    '& .MuiListItemButton-root': {
      backgroundColor: theme.palette.action.selected,
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const navItems = [
  { path: '/dashboard', name: 'Dashboard', icon: <Dashboard /> },
  { path: '/players', name: 'Players', icon: <SportsBasketball /> },
  { path: '/fees', name: 'Fees', icon: <Payments /> },
  { path: '/payments', name: 'Payments', icon: <CreditCard /> },
  { path: '/staff', name: 'Staff', icon: <Group /> },
];

const Sidebar = () => {
  const theme = useTheme();

  return (
    <SidebarContainer sx={{ width: 280 }}>
      <SidebarHeader>
        <ClubAvatar>
          <SportsBasketball />
        </ClubAvatar>
        <Typography variant="h6" component="h1" fontWeight="bold">
          Hoops Elite
        </Typography>
      </SidebarHeader>

      <Divider />

      <Box sx={{ flex: 1, overflowY: 'auto', py: 2 }}>
        <List>
          {navItems.map((item) => (
            <StyledNavLink key={item.path} to={item.path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItemButton>
              </ListItem>
            </StyledNavLink>
          ))}
        </List>
      </Box>

      <Divider />

      <Box sx={{ p: 2 }}>
        <StyledNavLink to="/settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                primaryTypographyProps={{ fontWeight: 'medium' }}
              />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
