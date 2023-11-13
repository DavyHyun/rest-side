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
  const [newMon, setNewMon] = useState('');
  const [newTue, setNewTue] = useState('');
  const [newWed, setNewWed] = useState('');
  const [newThur, setNewThur] = useState('');
  const [newFri, setNewFri] = useState('');
  const [newSat, setNewSat] = useState('');
  const [newSun, setNewSun] = useState('');

  const [isEditingRestName, setIsEditingRestName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingBodyText, setIsEditingBodyText] = useState(false);
  const [isEditingHeaderText, setIsEditingHeaderText] = useState(false);
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingMon, setIsEditingMon] = useState(false);
  const [isEditingTue, setIsEditingTue] = useState(false);
  const [isEditingWed, setIsEditingWed] = useState(false);
  const [isEditingThur, setIsEditingThur] = useState(false);
  const [isEditingFri, setIsEditingFri] = useState(false);
  const [isEditingSat, setIsEditingSat] = useState(false);
  const [isEditingSun, setIsEditingSun] = useState(false);

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
        setNewMon(firstRestaurant.Mon);
        setNewTue(firstRestaurant.Tue);
        setNewWed(firstRestaurant.Wed);
        setNewThur(firstRestaurant.Thur);
        setNewFri(firstRestaurant.Fri);
        setNewSat(firstRestaurant.Sat);
        setNewSun(firstRestaurant.Sun);

        setIsEditingRestName(false);
        setIsEditingAddress(false);
        setIsEditingBodyText(false);
        setIsEditingHeaderText(false);
        setIsEditingHours(false);
        setIsEditingPhoneNumber(false);
        setIsEditingMon(false);
        setIsEditingTue(false);
        setIsEditingWed(false);
        setIsEditingThur(false);
        setIsEditingFri(false);
        setIsEditingSat(false);
        setIsEditingSun(false);
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

  const handleMonChange = (event) => {
    setNewMon(event.target.value);
  };

  const handleTueChange = (event) => {
    setNewTue(event.target.value);
  };

  const handleWedChange = (event) => {
    setNewWed(event.target.value);
  };

  const handleThurChange = (event) => {
    setNewThur(event.target.value);
  };

  const handleFriChange = (event) => {
    setNewFri(event.target.value);
  };

  const handleSatChange = (event) => {
    setNewSat(event.target.value);
  };

  const handleSunChange = (event) => {
    setNewSun(event.target.value);
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

  const handleEditMonClick = () => {
    setIsEditingMon(true);
  };

  const handleEditTueClick = () => {
    setIsEditingTue(true);
  };  

  const handleEditWedClick = () => {
    setIsEditingWed(true);
  };

  const handleEditThurClick = () => {
    setIsEditingThur(true);
  };

  const handleEditFriClick = () => {
    setIsEditingFri(true);
  };

  const handleEditSatClick = () => {
    setIsEditingSat(true);
  };

  const handleEditSunClick = () => {
    setIsEditingSun(true);
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

  const handleMonClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newMon !== restaurantData.Mon) {
      update(restaurantRef, { Mon: newMon })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Mon: newMon,
          }));
          setIsEditingMon(false);
        })
        .catch((error) => {
          console.error('Error updating Mon:', error);
        });
    } else {
      setIsEditingMon(false);
    }
  };

  const handleTueClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newTue !== restaurantData.Tue) {
      update(restaurantRef, { Tue: newTue })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Tue: newTue,
          }));
          setIsEditingTue(false);
        })
        .catch((error) => {
          console.error('Error updating Tue:', error);
        });
    } else {
      setIsEditingTue(false);
    }
  };

  const handleWedClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newWed !== restaurantData.Wed) {
      update(restaurantRef, { Wed: newWed })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Wed: newWed,
          }));
          setIsEditingWed(false);
        })
        .catch((error) => {
          console.error('Error updating Wed:', error);
        });
    } else {
      setIsEditingWed(false);
    }
  };

  const handleThurClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newThur !== restaurantData.Thur) {
      update(restaurantRef, { Thur: newThur })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Thur: newThur,
          }));
          setIsEditingThur(false);
        })
        .catch((error) => {
          console.error('Error updating Thur:', error);
        });
    } else {
      setIsEditingThur(false);
    }
  };

  const handleFriClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newFri !== restaurantData.Fri) {
      update(restaurantRef, { Fri: newFri })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Fri: newFri,
          }));
          setIsEditingFri(false);
        })
        .catch((error) => {
          console.error('Error updating Fri:', error);
        });
    } else {
      setIsEditingFri(false);
    }
  };

  const handleSatClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newSat !== restaurantData.Sat) {
      update(restaurantRef, { Sat: newSat })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Sat: newSat,
          }));
          setIsEditingSat(false);
        })
        .catch((error) => {
          console.error('Error updating Sat', error);
        });
    } else {
      setIsEditingSat(false);
    }
  };

  const handleSunClick = () => {
    const restaurantRef = ref(database, `restaurants/-Nj2D9YEjyq1iyZM6aSQ`);
  
    if (newSun !== restaurantData.Sun) {
      update(restaurantRef, { Sun: newSun })
        .then(() => {
          setRestaurantData((prevData) => ({
            ...prevData,
            Sun: newSun,
          }));
          setIsEditingSun(false);
        })
        .catch((error) => {
          console.error('Error updating Sun', error);
        });
    } else {
      setIsEditingSun(false);
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
            <span className={classes.boldLabel}>Restaurant Name: </span> 
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
            <span className={classes.boldLabel}>Address: </span>
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
            <span className={classes.boldLabel}>Body Text: </span>
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
            <span className={classes.boldLabel}>Header Text: </span>
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
            <span className={classes.boldLabel}>Monday Hours: </span>
            {isEditingMon ? (
              <input type="text" value={newMon} onChange={handleMonChange} />
            ) : (
              <span>{restaurantData.Mon}</span>
            )}
            {isEditingMon ? (
              <button onClick={handleMonClick}>Save</button>
            ) : (
              <button onClick={handleEditMonClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Tuesday Hours: </span>
            {isEditingTue ? (
              <input type="text" value={newTue} onChange={handleTueChange} />
            ) : (
              <span>{restaurantData.Tue}</span>
            )}
            {isEditingTue ? (
              <button onClick={handleTueClick}>Save</button>
            ) : (
              <button onClick={handleEditTueClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Wednesday Hours: </span>
            {isEditingWed ? (
              <input type="text" value={newWed} onChange={handleWedChange} />
            ) : (
              <span>{restaurantData.Wed}</span>
            )}
            {isEditingWed ? (
              <button onClick={handleWedClick}>Save</button>
            ) : (
              <button onClick={handleEditWedClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Thursday Hours: </span>
            {isEditingThur ? (
              <input type="text" value={newThur} onChange={handleThurChange} />
            ) : (
              <span>{restaurantData.Thur}</span>
            )}
            {isEditingThur ? (
              <button onClick={handleThurClick}>Save</button>
            ) : (
              <button onClick={handleEditThurClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Friday Hours: </span>
            {isEditingFri ? (
              <input type="text" value={newFri} onChange={handleFriChange} />
            ) : (
              <span>{restaurantData.Fri}</span>
            )}
            {isEditingFri ? (
              <button onClick={handleFriClick}>Save</button>
            ) : (
              <button onClick={handleEditFriClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Saturday Hours: </span>
            {isEditingSat ? (
              <input type="text" value={newSat} onChange={handleSatChange} />
            ) : (
              <span>{restaurantData.Sat}</span>
            )}
            {isEditingSat ? (
              <button onClick={handleSatClick}>Save</button>
            ) : (
              <button onClick={handleEditSatClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Sunday Hours: </span>
            {isEditingSun ? (
              <input type="text" value={newSun} onChange={handleSunChange} />
            ) : (
              <span>{restaurantData.Sun}</span>
            )}
            {isEditingSun ? (
              <button onClick={handleSunClick}>Save</button>
            ) : (
              <button onClick={handleEditSunClick}>Edit</button>
            )}
          </p>

          <p className={classes.dataItem}>
            <span className={classes.boldLabel}>Phone Number: </span>
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

