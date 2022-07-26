import React from 'react'
import './navbar.css'
import arrowLeft from '../../../imgs/ArrowLeft.png';
import profileImg from '../../../imgs/profile_logo.png';

const Navbar = () => {
  return (
    <div className = "my__navbar">
      <div className="my__navbar-title" >
        <a id="arrowLeft" href=""> <img src={arrowLeft} alt="arrowLeft" /> </a>
        <h3>Tempus</h3>
        <input id="searchInput" type="text" placeholder="Search" />
        <a id="profileImg" href="http://127.0.0.1:5173/profile"> <img src={profileImg} alt="profileImg" width="80px" /> </a>
      </div>
    </div>
  )
}
export default Navbar
