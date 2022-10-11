import React from 'react'
import './nav.css';
import Avtar from '../../img/new.jpg'
import { Icon } from '@iconify/react';
const Nav = () => {
  return (
    <div className="nav">
      <div className="profilecard">
        <div className="avtar">
          <img src = {Avtar} alt="" />
          <span id='hello'>Hello 👋</span><span id='userName'>
            Anaya Forger
          </span>
          </div>
          <div className="menu">
            <span id='menu'>Menu</span>
            <ul>
              <li><Icon icon="fluent:home-12-regular" /><span id='home'>Home</span></li>
              <li><Icon icon="akar-icons:music-album" /><span id='home'>Albums</span></li>
              <li><Icon icon="ci:user-square" /><span id='home'>Artist</span></li>
              <li><Icon icon="mdi:google-podcast" /><span id='home'>Prodcast</span></li>
            </ul>
          </div>
          <div className="lib">
            <span id='menu'>My Libraries</span>
            <ul>
              <li><Icon icon="cryptocurrency:music" /><span id='home'>Recently Played</span></li>
              <li id='liked'><Icon icon="flat-color-icons:like" /><span id='home'>Liked Songs</span></li>
              <li><Icon icon="ant-design:plus-outlined" /><span id='home'>Create New Playlist</span></li>
              <hr id='line' />
            </ul>
          </div>
          <div className="lib1">
           
            <ul>
              <li><span id='home'>Chill✨🎉</span></li>
              <li><span id='home'>Mood🖤💔</span></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Nav