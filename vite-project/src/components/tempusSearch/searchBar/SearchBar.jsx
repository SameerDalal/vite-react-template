import React from 'react'
import './searchBar.css'


const SearchBar = () => {
    return (
      <div className="search__bar-container">  
        <div className="search__bar">
            <input type="text" placeholder="Search" />
        </div>
      </div>
    )
  }
  
  export default SearchBar;