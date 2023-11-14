import React, { useState, useEffect } from 'react'
import Title from '../../components/History/TitleContainer/Title'
import styles from './Products.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import data from '../../assets/data.json'
import Category from '../../components/Category/Category'

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionArray, setSectionArray] = useState([]);
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  // retrieve products and prices
  useEffect(() => {
    window.dispatchEvent(new Event('storage')) // trigger update to header
    if (products.length == 0 || prices.length == 0) {
      getProducts();
      getPrices();
    } else {
      combinePrices();
    }
  }, [products])

  // get all products from stripe
  const getProducts = async () => {
    fetch('http://localhost:3000/products')
      .then(r => r.json())
      .then(data => {
        var array = data.products;
        setProducts(array);
      });
  }

  // get all prices from stripe
  const getPrices = async () => {
    fetch('http://localhost:3000/prices', {
    }).then(r => r.json())
      .then(data => {
        var array = data.price;
        setPrices(array);
      })
  }

  // combines products to prices
  const combinePrices = () => {

    // create section array
    const sectionArray = [];
    for (let i = 0; i < data.categories.length; i++) {
      sectionArray.push({ title: data.categories[i].title, id: data.categories[i].id, items: [], customization: [] });
    }

    // edit prices
    // put each item into its respective category in the section array
    for (let i = 0; i < products.length; i++) {
      products[i].price = prices[i].unit_amount / 100;

      if (products[i].metadata.customization === 'true') {
        const catNames = products[i].metadata.category.split(', ');
        for (const catName of catNames) {
          const category = sectionArray.find((cat) => cat.id === catName);
          if (category) {
            category.customization.push(products[i]);
          }
        }
      } else {
        const category = sectionArray.find((cat) => cat.id === products[i].metadata.category);
        if (category) {
          category.items.push(products[i]);
        }
      }
    }
    setSectionArray(sectionArray);
    console.log("test1");
    console.log(sectionArray);
    console.log("test2");
  }

  return (
    <div className={styles.container}>
      <Title title={"PRODUCTS"} />
      <SearchBar setFunction={setSearchTerm} />
      {sectionArray.map((item, index) => (
        <Category data={item} key={index} />
      ))}
      <div>

      </div>
    </div>
  )
}

export default Products