import React from 'react'
import { Icon } from '@iconify/react'
import './ArtistNav.css'
import profileImg from '../../img/Photo.jpg'

const ArtistNav = () => {
  return (
   <div className="ArtistNav">
    <div className="AdminNav">
      <div className="profile">
        <img src={profileImg} alt="Profile Image" className="profileImg" />

        <span className="profileName">@AlexJenshon </span>
        <br />
        <span className="profileEdit">Edit your Profile</span>
        <Icon icon="akar-icons:more-vertical-fill" className="icon" />
      </div>
      <ul>
        <li className="navLi-Out">
          <input type={"text"} className="input" placeholder="Search.." />
          <Icon icon="bx:search-alt" id="search-i" />
        </li>
        <li className="navLi">
          <Icon icon="bxs:dashboard" className="nav-i" />
          Dashboard
         
        </li>
        <li className="navLi" 
       >
         <Icon icon="nimbus:drums"  className="nav-i" />
          Band
          
        </li>
        <li className="navLi">
        <Icon icon="bi:calendar-check-fill"  className="nav-i" />
          Orders
           
        </li>
        <li className="navLi">
        <Icon icon="bxs:wallet-alt"  className="nav-i" />
          Payment
           
        </li>
        <li className="navLi">
        <Icon icon="icon-park:upload-picture"  className="nav-i" />
          Post
           
        </li>
        <li className="navLi">
        <Icon icon="fluent:door-arrow-right-28-filled"  className="nav-i" />
          Log out
        </li>
      </ul>
    </div>
   </div>
  )
}

export default ArtistNav