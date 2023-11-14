import React, { useEffect, useState } from 'react'
import classes from "./Cleared.module.scss";
import OrderCard from '../../components/OrderCard/OrderCard';
import { get, ref, onValue, update, remove, child, push } from 'firebase/database';
import {database} from '../../firebase'; 

function Cleared() {

    const [orders, setOrders] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        const orderRef = ref(database, 'restaurants/-Nj2D9YEjyq1iyZM6aSQ/cleared');

        try {
          onValue(orderRef, (snapshot) => {
              if (!snapshot.exists()) {
                  setKeys([]);
                  setOrders([]);
              } else {
                  const data = snapshot.val();
                  if (data === null) {
                      setKeys([]);
                      setOrders([]);
                  } else {
                      setKeys(Object.keys(data));
                      setOrders(Object.values(data));
                  }
              }
          });
      } catch (error) {
          console.error('An error occurred:', error.message);
          // Handle the error gracefully, e.g., set state to default values
          setKeys([]);
          setOrders([]);
      }

        return () => {
            onValue(orderRef, () => {});
        }

    },[])

    const removeOrder = (prop) => {
        const orderRef = ref(database, 'restaurants/-Nj2D9YEjyq1iyZM6aSQ/cleared');
        const idToRemove = keys[prop - 1];

        remove(child(orderRef, idToRemove))
            .then(() => {
                console.log(`Order with ID ${idToRemove} removed successfully.`);
            })
            .catch((error) => {
                console.error(`Error removing order: ${error.message}`);
            });

        const clearedRef = ref(database, 'restaurants/-Nj2D9YEjyq1iyZM6aSQ/orders');
        const objToAdd = orders[prop - 1];

        const added = push(clearedRef, objToAdd);
        console.log("ITEM ADDED TO CLEAR");


    }

  return (
    <div className={classes.container}>
      <p1 style={{
        width: '92.5%',
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '3%',
        marginBottom: '1%'
      }}>CLEARED ORDERS</p1>
      <div className={classes.orderContainer}>
        {
          orders.map((order, index) => {
            return (
              <OrderCard order={order} index={index + 1} removeOrder={(prop) => removeOrder(prop)} cleared={true}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cleared