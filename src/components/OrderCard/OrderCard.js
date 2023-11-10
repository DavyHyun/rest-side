import React from 'react'
import classes from "./OrderCard.module.scss";
import OrderView from '../OrderView/OrderView';
function OrderCard(props) {

    const order = props.order;
    const key = props.index;

  return (
    <div className={classes.container}>
        <p className={classes.orderText}>ORDER #{key}</p>
        <div className={classes.orderContainer}>
            {
                order.items.map((item, i) => {
                    return (
                        <OrderView item={item} i={i}/>
                    )
                })
            }
        </div>
        <div className={classes.bottomContainer}>
            <div className={classes.totalContainer}>
                <p1>x{order.items.length} Items</p1>
                <p2>${order.total.toFixed(2)}</p2>
            </div>

            <div className={classes.checkButton}>
                <p1>✓</p1>
            </div>
        </div>
    </div>
  )
}

export default OrderCard