import React from 'react';
import './searchBar.css';


const SearchBar = () => {
    return (
      <div className="search__bar-container">  
        <div className="search__bar">
            <input type="text" placeholder="Search" />
            <div class="fa fa-search"></div>
            <div class="fa fa-times"></div>
        </div>
      </div>
    )
  }
  
  export default SearchBar;