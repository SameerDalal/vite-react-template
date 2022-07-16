import React from 'react'
import './footer.css';
import profile from '../../../imgs/profile_logo.png';
import searchSmall from '../../../imgs/searchSmall.png';
import home from "../../../imgs/home.png"


const Footer = () => {
  return (
    <div className = "my__footer">
      <div className="my__footer-logos" >
        <a href=""> <img src={home} alt="home" /> </a>
        <a href=""> <img src={searchSmall} alt="searchSmall" /> </a>
        <a href=""> <img src={profile} alt="profile"/> </a>
      </div>
    </div>
  )
}

export default Footer