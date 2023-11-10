import React from 'react'
import classes from "./OrderView.module.scss";

function OrderView(props) {

    const item = props.item;
    const i = props.i;
  return (
    <div className={classes.container}>
        <p1>{i + 1}. {item.name}</p1>
        <p2>Special Instructions: {item.inst}</p2>
        <div style={{width: '43%', display: 'flex', justifyContent: 'space-between'}}>
            <p1>Qty: {item.qty}</p1>
            <p1>${item.cost.toFixed(2)}</p1>
        </div>
        <p3>______________________________________</p3>
    </div>
  )
}

export default OrderView