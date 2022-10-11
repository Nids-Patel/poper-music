import React from 'react'
import './ArtistComponents.css'
import ArtistNav from '../ArtistNav/ArtistNav'
import { Icon } from '@iconify/react';
import ArtistIncom from "../ArtistIncom/ArtistIncom"
import ArtistPost from '../ArtistPost/ArtistPost';
import ArtistFriends from '../ArtistFriends/ArtistFriends'
import ArtistBand from '../ArtistBand/ArtistBand';

const ArtistComponent = () => {
  return (
    <div className="ArtistComponent">
       <div className="Dashboard">
        <span className='Dash'>Dashboard</span>
        <div className="searchIT">
        <Icon icon="charm:search" id='searchMe' /><input type={"text"} className='SearchAny'
        placeholder='Search..' />
       </div>
       <Icon icon="bi:chat-left-dots-fill"  className='chats' />
       <Icon icon="ion:notifications-circle" 
       className='chats1'/>
       </div>
       <ArtistIncom />
       <div className="holderPost">
       <ArtistPost />
       <div>
        <ArtistBand />
       <ArtistFriends />
       </div>
       </div>
    </div>
  )
}

export default ArtistComponent