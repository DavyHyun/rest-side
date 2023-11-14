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
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { styled } from '@mui/material/styles';
import {auth, database} from '../../firebase'
import { get, ref, onValue, update, remove, child, push, set } from 'firebase/database';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

function SideBar() {

    const RESTNAME = "COMMUNITY GROCERY & TERIYAKI";

    const handleChange = (event) => {
        const isChecked = event.target.checked;
      const openRef = ref(database, 'restaurants/-Nj2D9YEjyq1iyZM6aSQ');
      update(openRef, {open: isChecked });
    }

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
       <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Store Close</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onChange={handleChange} />
        <Typography>Store Open</Typography>
      </Stack>
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