import React from 'react'
import classes from "./OrderView.module.scss";

function OrderView(props) {

    const item = props.item;
    console.log(item);
    const options = item.options;
    console.log(options);
    let string = '';
    if (!(options === undefined)) {
        string = options.join(", ")
    }
    console.log("STRING: " + string)
    const i = props.i;
  return (
    <div className={classes.container}>
        <p1>{i + 1}. {item.name}</p1>
        <p2>Special Instructions: {item.inst}, {string}</p2>
        <div style={{width: '43%', display: 'flex', justifyContent: 'space-between'}}>
            <p1>Qty: {item.qty}</p1>
            <p1>${item.cost.toFixed(2)}</p1>
        </div>
        <p3>______________________________________</p3>
    </div>
  )
}

export default OrderView