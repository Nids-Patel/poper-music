import React from 'react'
import { Icon } from '@iconify/react'
import './ArtistPost.css'
import {Post} from '../../Data/PostData'

const ArtistPost = () => {
  return (
 <div className="ArtistPost">
    <span className="Post">
        Post
    </span>
    <div className="PostContainar">
    {Post.map((Post, id) => {
     return(
      <div>
        <div className="postcotainer">
        <img src={Post.img} alt="User profile pic" className='UserPic' />
        <div className="user">
         <span className="UserName">@AlexJenshon</span>
         <span className='timeDate'> 11 Jan 2022 05:32 pm</span>
         </div>
         <Icon icon="eva:more-vertical-outline" className='PostMore'/>
         </div>
         <div className="mainPostImageCon">
          <img src={Post.band} alt="Post apper hear" className='PostImage' />
         </div>
         <span className='caption'>{ Post.caption }</span>
         <span className='hastag'>{ Post.hastage }</span>
         
         <hr />
<div className="conIcons">
         <span className='likeIcon'>{ Post.like }</span>
         <span className='commentIcon'>{ Post.comment }</span>
         <span className='shareIcon'>{ Post.share }</span>
         </div>
                  </div>
        )
        })}
    </div>
 </div>
  )
}

export default ArtistPost
