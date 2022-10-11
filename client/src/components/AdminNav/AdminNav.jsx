import React from "react";
import profileImg from "../../img/new.jpg";
import "./AdminNav.css";
import { Icon } from "@iconify/react";
import Maincom from "../Maincom/Maincom";
import Artist from "../../pages/AdminPages/Artist/Artist";



const AdminNav = () => {
  return (
    <div className="AdminNav">
      <div className="profile">
        <img src={profileImg} alt="Profile Image" className="profileImg" />

        <span className="profileName">Poper </span>
        <br />
        <span className="profileEdit">Edit your Profile</span>
        <Icon icon="flat-color-icons:next" className="icon" />
      </div>
      <ul>
        <li className="navLiCo">
          <input type={"text"} className="inputSear" placeholder="Search.." />
          <Icon icon="bx:search-alt" id="search-i" />
        </li>
        <li className="navLiCo">
          <Icon icon="bxs:dashboard" className="nav-i" />
          Dashboard
         
        </li>
        <li className="navLiCo" 
       >
          <Icon icon="bxs:user" className="nav-i" />
          Artist
          
        </li>
        <li className="navLiCo">
          <Icon icon="simple-icons:bandsintown" className="nav-i" />
          Band
           
        </li>
        <li className="navLiCo">
          <Icon icon="ic:round-local-cafe" className="nav-i" />
          Cafe
           
        </li>
        <li className="navLiCo">
          <Icon icon="fluent:payment-48-filled" className="nav-i" />
          Payment
           
        </li>
        <li className="navLiCo">
          <Icon icon="majesticons:logout-half-circle" className="nav-i" />
          Log out
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
