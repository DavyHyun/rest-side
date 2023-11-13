import React from 'react'
import styles from './Title.module.scss'

function Title(props) {
  return (
      <div className={styles.titleContainer}>
        {props.title}
      </div>
  )
}

export default Title 