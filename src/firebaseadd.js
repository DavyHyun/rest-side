const { getDatabase, ref, push, set } = require("firebase/database");
const app = require("./firebase.js");

const database = getDatabase(app);
const dataRef = ref(database, 'restaurants');

const restaurantData = {
    RESTNAME: "COMMUNITY GROCERY AND TERIYAKI",
    backgroundImage: "/images/pho.jpg",
    imageUrl: "/images/about.jpg",
    headerText: "This is the header text from global.json",
    bodyText: "This is the body text from global.json. This is probably going to be a little longer than whatever the header is so I am writing mindlessly in order to make up for the white space",
    address: "415 Seneca St, Seattle, WA 98101",
    phoneNumber: "206-682-7535",
    hours: "Mon - Fri: 9AM - 8PM\nSat: 11AM - 8PM\nSun: Closed",
    categories: [
      {
        title: "Teriyaki",
        id: "Teriyaki"
      },
      {
        title: "Stir Fry Vegetable",
        id: "Stir_Fry_Vegetable"
      }
    ]
  };
  

const newRestaurantRef = push(dataRef);
set(newRestaurantRef, restaurantData)
  .then(() => {
    console.log('Restaurant data added successfully!');
  })
  .catch((error) => {
    console.error('Error adding restaurant data: ', error);
  });