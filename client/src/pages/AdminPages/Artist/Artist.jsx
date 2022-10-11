import React from 'react'
import './Artist.css'
import { Icon } from '@iconify/react'
import ArtistCom from '../../../components/ArtistCom/ArtistCom'


const Artist = () => {
  return (
    <div className="Artist">
          <div className="dashbord">
          <span id="dash">
           Artist
            <Icon 
            icon="ci:notification-dot" className="noti" />
            <Icon icon="clarity:chat-bubble-solid-badged" className="chat"  />
          </span>
        </div>
        {/* Artist info imort heare */}
        <ArtistCom />
       
       
    </div>
  )
}

export default Artist



