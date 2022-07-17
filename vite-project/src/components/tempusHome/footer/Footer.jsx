import React from 'react'
import './footer.css';
import profile from '../../../imgs/profile_logo.png';
import searchSmall from '../../../imgs/searchSmall.png';
import home from "../../../imgs/home.png"


const Footer = () => {
  return (
    <div className = "my__footer">
      <div className="my__footer-logos" >
        <a href="http://127.0.0.1:5173/"> <img src={home} alt="home" /> </a>
        <a href="http://127.0.0.1:5173/search"> <img src={searchSmall} alt="searchSmall" /> </a>
        <a href="http://127.0.0.1:5173/profile"> <img src={profile} alt="profile"/> </a>
      </div>
    </div>
  )
}

export default Footer