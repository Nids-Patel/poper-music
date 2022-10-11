import React from 'react'
import './Main.css'
import { Icon } from '@iconify/react';

const Main = () => {
  return (
   <div className="Main">
    <div className="topnav">
    
       <Icon className='less' icon="fa6-solid:less-than" />
   
    
      <Icon 
      className='less greater'
      icon="fa6-solid:greater-than" />
     
    <input type="text" name="search" id="search" placeholder='Search any song heare' />
    <Icon id='icons' icon="lucide:search" />
    </div>
    <div className="banner">
        <div className="title">
            <span className='playlist'>Playlist</span><br />
            <span className='likes'>Your Liked<br />Songs</span>
            <span className='musicName'><Icon icon="fa:music" id='musicIcon' />FullSong <Icon icon="clarity:replay-one-line" />0:10 - 2:30 </span>
        </div>
        </div>
        <div className="options">
          
            <Icon icon="akar-icons:search" className='search-song' />
            <Icon icon="bi:download"
            className='search-song' />
        </div>
    </div>
  

  )
}

export default Main