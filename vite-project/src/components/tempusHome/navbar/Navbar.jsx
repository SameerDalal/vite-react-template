import React from 'react'
import './navbar.css'
import arrowLeft from '../../../imgs/ArrowLeft.png';

const Navbar = () => {
  return (
    <div className = "my__navbar">
      <div className="my__navbar-title" >
        <a href=""> <img src={arrowLeft} alt="arrowLeft" /> </a>
        <h3>Tempus</h3>
      </div>
    </div>
  )
}
export default Navbar
