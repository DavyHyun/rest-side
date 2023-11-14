import React from 'react'
import styles from './OrdersContainer.module.scss'
import IndividualOrder from '../IndividualOrder/IndividualOrder'

function OrdersContainer(props) {
  return (
    <div className={styles.ordersContainer}>
      {props.data.map((item, index) => (
        <IndividualOrder item={item} index={index} />
      ))}
    </div>
  )
}

export default OrdersContainer