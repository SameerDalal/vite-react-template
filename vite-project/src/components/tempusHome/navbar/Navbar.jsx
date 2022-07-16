import React from 'react'
import './navbar.css'
import profile from '../../../imgs/profile_logo.png';
import search from '../../../imgs/search.png';
import arrowLeft from '../../../imgs/ArrowLeft.png';

const Navbar = () => {
  return (
    <div className = "my__navbar">
      <div className="my__navbar-title" >
        <a href=""> <img src={arrowLeft} alt="arrowLeft" /> </a>
        <h3>Tempus</h3>
       
      </div>
        <div className="my__navbar-images">
          <div className="my__navbar-images-search">
            <a href=""> <img src={search} alt ="search" width={300} /> </a>
          </div>
          <div className="my__navbar-images-profile">
          <a href=""> <img src={profile} alt ="profile" width={75} height={75} /> </a>  
        </div>  
      </div>
    </div>
  )
}
export default Navbar
