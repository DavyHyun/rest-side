import React from 'react'
import styles from './SearchBar.module.scss'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon color="disabled"/>
      <input className={styles.searchBar} placeholder='Search' onChange={(text) => props.setFunction(text.target.value)}/>
    </div>
  )
}

export default SearchBar