import React from 'react'
import styles from './IndividualOrder.module.scss'

function IndividualOrder(props) {
  return (
    <div className={styles.orderContainer} key={props.index}>
      {props.item.map((field, index) => (
        <div className={styles.orderCategory}>
          {index !== 3 ?
            <p>{field}</p>
            :
            <p>coming soon...</p>
          }
        </div>

      ))}
    </div>
  )
}

export default IndividualOrder