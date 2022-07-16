import React from 'react'
import './profileImg.css'
import PersonCircle from '../../../imgs/PersonCircle.png'



const ProfileImg = () => {
    return (
      <div className="profile">  
        <div className="profile__img">
            <img src = {PersonCircle} alt ="PersonCircle" width={100}/>
        </div>
      </div>
    )
  }
  
  export default ProfileImg;