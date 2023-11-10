import React from 'react'
import SideBar from "../SideBar/SideBar";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div style={{display: 'flex'}}>
        <SideBar />
        <div className={classes.container}>{children}</div>
    </div>     
  )
}

export default Layout