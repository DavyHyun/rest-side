import React, {useState, useEffect} from 'react'
import SideBar from "../SideBar/SideBar";
import {auth} from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import classes from "./Layout.module.scss";
import Login from '../../pages/Login/Login';

function Layout({ children }) {

  const [logged, setLogged] = useState(false);


  useEffect(() => {
    checkAuth();
  }, [])

  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  };

  return (
    <div style={{display: 'flex', backgroundColor: '#F3F3F3'}}>

      {logged ? 
        <>
          <SideBar />
          <div className={classes.container}>{children}</div>
        </>
      :
        <Login />
      }
    </div>     
  )
}

export default Layout