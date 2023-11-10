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
import { Link } from 'react-router-dom';

function SideBar() {

    const RESTNAME = "COMMUNITY GROCERY & TERIYAKI";

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
        <ListItemIcon>
          <HomeOutlinedIcon />
        </ListItemIcon>
        Home
      </ListItem>
      <ListItem button component={Link} to="/cleared">
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        Cleared Orders
      </ListItem>
      <ListItem button component={Link} to="/history">
        <ListItemIcon>
          <AttachMoneyOutlinedIcon />
        </ListItemIcon>
        Transaction History
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemIcon>
          <ShoppingCartOutlinedIcon />
        </ListItemIcon>
        Products
      </ListItem>
      <ListItem button component={Link} to="/settings">
        <ListItemIcon>
          <SettingsOutlinedIcon />
        </ListItemIcon>
        Settings
      </ListItem>
    </List>
  </Drawer>
  )
}

export default SideBar