import React from 'react'
import styles from './ContentTitles.module.scss'

function ContentTitles(props) {
  return (
    
    <div className={styles.contentLabel}>
      {props.data.map((item, index) => (
        <div className={styles.contentTitle} key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentTitles 