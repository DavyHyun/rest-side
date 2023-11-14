import React, { useEffect, useState } from 'react'
import classes from "./Home.module.scss";
import OrderCard from '../../components/OrderCard/OrderCard';
import io from 'socket.io-client'

const fakeOrders = [
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 2,
        cost: 13.50
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 2,
        cost: 13.50
      },
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },

    ],
    total: 26.49,
  },
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 3,
        cost: 13.50
      }
    ],
    total: 26.49,
  },
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 4,
        cost: 13.50
      }
    ],
    total: 26.49,
  },
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 5,
        cost: 13.50
      }
    ],
    total: 26.49,
  },
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 6,
        cost: 13.50
      }
    ],
    total: 26.50,
  },
  {
    items: [
      {
        name: 'Chicken Veggie',
        options: ['Extra Chicken', 'Spicy Chicken'],
        inst: 'no pepper please',
        qty: 1,
        cost: 13.50,
      },
      {
        name: 'Gyoza Plate (10pcs)',
        options: [],
        inst: '',
        qty: 7,
        cost: 13.50
      }
    ],
    total: 26.49,
  }
]
function Home() {

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
      }}>HOME - ORDER LIST</p1>
      <div className={classes.orderContainer}>
        {
          fakeOrders.map((order, index) => {
            return (
              <OrderCard order={order} index={index + 1} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home