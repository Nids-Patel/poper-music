import React from 'react'
import './ArtistFriends.css'
import { FriendList } from '../../Data/FriendList'

const ArtistFriends = () => {
  return (
    <div className="ArtistFriends">
       <span className='title'> Friend List</span>
<div className="list">
        {FriendList.map((FriendList , id) =>{
            return(
                <div className="friend">
                <img 
                src={ FriendList.img } className="profiePic" 
                alt='profilepic '
                /> 
                <div className="useName">
                <span className="username">
                    {FriendList.name}
                </span>
                <span className="active">
                    {FriendList.Active}
                </span>
                </div>
                
                <span className="Emoji">
                    {FriendList.friend}
                </span>
                <span className="moreInfoF">
                    {FriendList.more}
                </span>
                </div>
            )
        })}
        
     </div>
    </div>
  )
}

export default ArtistFriends
