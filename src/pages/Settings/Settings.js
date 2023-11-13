import React, { useState, useEffect } from 'react';
import { get, ref, onValue } from 'firebase/database';
import database from '../../firebase'; 

import classes from './Settings.module.scss';

function Settings() {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const restaurantsRef = ref(database, 'restaurants');

    const unsubscribe = onValue(restaurantsRef, (snapshot) => {
      const data = snapshot.val();

      const firstRestaurantId = Object.keys(data)[0];
      const firstRestaurant = data[firstRestaurantId];
      setRestaurantData(firstRestaurant);
    });

    return () => unsubscribe();
  }, []); 

  return (
    <div className={classes.container}>
      <p1 style={{
        width: '92.5%',
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        fontSize: '20px',
        marginTop: '3%',
        marginBottom: '1%',
      }}>SETTINGS</p1>

      {restaurantData && (
        <div className={classes.restaurantDataContainer}>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Restaurant Name:</span> {restaurantData.RESTNAME}
          </p>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Address:</span> {restaurantData.address}
          </p>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Header Text:</span> {restaurantData.headerText}
          </p>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Body Text:</span> {restaurantData.bodyText}
          </p>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Hours:</span> {restaurantData.hours}
          </p>
          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Phone Number:</span> {restaurantData.phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
}

export default Settings;