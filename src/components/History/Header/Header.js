import React from 'react'
import styles from './Header.module.scss'

function Header(props) {
  console.log(props.data);
  return (
    <div className={styles.headerContainer}>
      {props.data.map((item, index) => (
        <div className={styles.headerItem} key={index}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.content}>{item.content}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Header 