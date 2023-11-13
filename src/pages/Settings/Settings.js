import React, { useState, useEffect } from 'react';
import { get, ref, onValue, update } from 'firebase/database';
import database from '../../firebase'; 

import classes from './Settings.module.scss';
import isEqual from 'lodash/isEqual';

function Settings() {
  const [restaurantData, setRestaurantData] = useState(null);
  const [newRestName, setNewRestName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newBodyText, setNewBodyText] = useState('');
  const [newHeaderText, setNewHeaderText] = useState('');
  const [newHours, setNewHours] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const [isEditingRestName, setIsEditingRestName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingBodyText, setIsEditingBodyText] = useState(false);
  const [isEditingHeaderText, setIsEditingHeaderText] = useState(false);
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  useEffect(() => {
    const restaurantsRef = ref(database, 'restaurants');
  
    const unsubscribe = onValue(restaurantsRef, (snapshot) => {
      const data = snapshot.val();
  
      const firstRestaurantId = Object.keys(data)[0];
      const firstRestaurant = data[firstRestaurantId];
  
      if (!isEqual(firstRestaurant, restaurantData)) {
        setRestaurantData(firstRestaurant);
        setNewRestName(firstRestaurant.RESTNAME);
        setNewAddress(firstRestaurant.address);
        setNewBodyText(firstRestaurant.bodyText);
        setNewHeaderText(firstRestaurant.headerText);
        setNewHours(firstRestaurant.hours);
        setNewPhoneNumber(firstRestaurant.phoneNumber);

        setIsEditingRestName(false);
        setIsEditingAddress(false);
        setIsEditingBodyText(false);
        setIsEditingHeaderText(false);
        setIsEditingHours(false);
        setIsEditingPhoneNumber(false);
      }
    });
  
    return () => unsubscribe();
  }, [restaurantData]);

  const handleRestNameChange = (event) => {
    setNewRestName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleBodyTextChange = (event) => {
    setNewBodyText(event.target.value);
  };

  const handleHeaderTextChange = (event) => {
    setNewHeaderText(event.target.value);
  };

  const handleHoursChange = (event) => {
    setNewHours(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const handleEditRestNameClick = () => {
    setIsEditingRestName(true);
  };

  const handleEditAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleEditBodyTextClick = () => {
    setIsEditingBodyText(true);
  };

  const handleEditHeaderTextClick = () => {
    setIsEditingHeaderText(true);
  };

  const handleEditHoursClick = () => {
    setIsEditingHours(true);
  };

  const handleEditPhoneNumberClick = () => {
    setIsEditingPhoneNumber(true);
  };

  const handleSaveRestNameClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newRestName !== restaurantData.RESTNAME) {
      update(restaurantRef, { RESTNAME: newRestName })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            RESTNAME: newRestName,
          }));
          setIsEditingRestName(false);
        })
        .catch((error) => {
          console.error('Error updating restaurant name:', error);
        });
    } else {
      setIsEditingRestName(false);
    }
  };

  const handleSaveAddressClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newAddress !== restaurantData.address) {
      update(restaurantRef, { address: newAddress })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            address: newAddress,
          }));
          setIsEditingAddress(false);
        })
        .catch((error) => {
          console.error('Error updating address:', error);
        });
    } else {
      setIsEditingAddress(false);
    }
  };

  const handleSaveBodyTextClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newBodyText !== restaurantData.bodyText) {
      update(restaurantRef, { bodyText: newBodyText })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            bodyText: newBodyText,
          }));
          setIsEditingBodyText(false);
        })
        .catch((error) => {
          console.error('Error updating body text:', error);
        });
    } else {
      setIsEditingBodyText(false);
    }
  };

  const handleSaveHeaderTextClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newHeaderText !== restaurantData.headerText) {
      update(restaurantRef, { headerText: newHeaderText })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            headerText: newHeaderText,
          }));
          setIsEditingHeaderText(false);
        })
        .catch((error) => {
          console.error('Error updating header text:', error);
        });
    } else {
      setIsEditingHeaderText(false);
    }
  };

  const handleSaveHoursClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newHours !== restaurantData.hours) {
      update(restaurantRef, { hours: newHours })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            hours: newHours,
          }));
          setIsEditingHours(false);
        })
        .catch((error) => {
          console.error('Error updating hours:', error);
        });
    } else {
      setIsEditingHours(false);
    }
  };

  const handleSavePhoneNumberClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newPhoneNumber !== restaurantData.phoneNumber) {
      update(restaurantRef, { phoneNumber: newPhoneNumber })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            phoneNumber: newPhoneNumber,
          }));
          setIsEditingPhoneNumber(false);
        })
        .catch((error) => {
          console.error('Error updating phone number:', error);
        });
    } else {
      setIsEditingPhoneNumber(false);
    }
  };

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
            <span className={classes.boldLabel}>Restaurant Name:</span> 
            {isEditingRestName ? (
              <input type="text" value={newRestName} onChange={handleRestNameChange} />
            ) : (
              <span>{restaurantData.RESTNAME}</span>
            )}
            {isEditingRestName ? (
              <button onClick={handleSaveRestNameClick}>Save</button>
            ) : (
              <button onClick={handleEditRestNameClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Address:</span>
            {isEditingAddress ? (
              <input type="text" value={newAddress} onChange={handleAddressChange} />
            ) : (
              <span>{restaurantData.address}</span>
            )}
            {isEditingAddress ? (
              <button onClick={handleSaveAddressClick}>Save</button>
            ) : (
              <button onClick={handleEditAddressClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Body Text:</span>
            {isEditingBodyText ? (
              <input type="text" value={newBodyText} onChange={handleBodyTextChange} />
            ) : (
              <span>{restaurantData.bodyText}</span>
            )}
            {isEditingBodyText ? (
              <button onClick={handleSaveBodyTextClick}>Save</button>
            ) : (
              <button onClick={handleEditBodyTextClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Header Text:</span>
            {isEditingHeaderText ? (
              <input type="text" value={newHeaderText} onChange={handleHeaderTextChange} />
            ) : (
              <span>{restaurantData.headerText}</span>
            )}
            {isEditingHeaderText ? (
              <button onClick={handleSaveHeaderTextClick}>Save</button>
            ) : (
              <button onClick={handleEditHeaderTextClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Hours:</span>
            {isEditingHours ? (
              <input type="text" value={newHours} onChange={handleHoursChange} />
            ) : (
              <span>{restaurantData.hours}</span>
            )}
            {isEditingHours ? (
              <button onClick={handleSaveHoursClick}>Save</button>
            ) : (
              <button onClick={handleEditHoursClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Phone Number:</span>
            {isEditingPhoneNumber ? (
              <input type="text" value={newPhoneNumber} onChange={handlePhoneNumberChange} />
            ) : (
              <span>{restaurantData.phoneNumber}</span>
            )}
            {isEditingPhoneNumber ? (
              <button onClick={handleSavePhoneNumberClick}>Save</button>
            ) : (
              <button onClick={handleEditPhoneNumberClick}>Edit</button>
            )}
          </p>

          {/* Include other data items as needed */}
        </div>
      )}
    </div>
  );
}

export default Settings;

