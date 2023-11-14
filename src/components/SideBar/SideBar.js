import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HistoryIcon from '@mui/icons-material/History';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import {auth} from '../../firebase'

function SideBar() {

    const RESTNAME = "COMMUNITY GROCERY & TERIYAKI";

    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log('signed out')
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    }
  return (
    <Drawer sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
      }}
      variant="permanent"
      anchor="left">
       <p style={{
        fontSize: '18px',
        margin: '20px',
        lineHeight: '30px'
       }}>{RESTNAME}</p>
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon style={{color: '#B8293D'}}>
          <HomeOutlinedIcon />
        </ListItemIcon>
        Home
      </ListItem>
      <ListItem button component={Link} to="/cleared">
        <ListItemIcon style={{color: '#B8293D'}}>
          <HistoryIcon />
        </ListItemIcon>
        Cleared Orders
      </ListItem>
      <ListItem button component={Link} to="/history">
        <ListItemIcon style={{color: '#B8293D'}}>
          <AttachMoneyOutlinedIcon />
        </ListItemIcon>
        Transaction History
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemIcon style={{color: '#B8293D'}}>
          <ShoppingCartOutlinedIcon />
        </ListItemIcon>
        Products
      </ListItem>
      <ListItem button component={Link} to="/settings">
        <ListItemIcon style={{color: '#B8293D'}}>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        Settings
      </ListItem>
      <ListItem button onClick={handleLogout}>
        <ListItemIcon style={{color: '#B8293D'}}>
          <LogoutOutlinedIcon />
        </ListItemIcon>
       Logout
      </ListItem>
    </List>
  </Drawer>
  )
}

export default SideBar