import React from 'react'
import SideBar from "../SideBar/SideBar";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div style={{display: 'flex', backgroundColor: '#F3F3F3', height: '100vh'}}>
        <SideBar />
        <div className={classes.container}>{children}</div>
    </div>     
  )
}

export default Layout