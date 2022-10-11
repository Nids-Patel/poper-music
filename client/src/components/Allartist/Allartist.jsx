import React from 'react'
import './Allartist.css'
import { Icon } from '@iconify/react'
import { ArtistAll } from '../../Data/ArtistData'
import ArtistProfile from '../../components/ArtistProfile/ArtistProfile'

const Allartist = () => {
  return (
    <div className="Allartist">
        <div className="dashboard">
            <span className='header'>All Artist Info</span>
            <span className='noti Noti'><Icon icon="clarity:bell-solid-badged" /></span>
            <span className='chat'><Icon icon="clarity:chat-bubble-solid-badged" /></span>
            
            <span className='filler1'
            ><Icon icon="cil:list-filter" className='fill'/><span id="lableForF">Filter</span></span>
        </div>
   <div className="allartist">
    <div className="allCon">
        <div className="scrolldiv">
                <div className="conent">
                {ArtistAll.map((AllArtist, id) => {
                    return(
                        <div className="holder">
                        <div className="A-container">
                    <img src={AllArtist.img} alt="profile pic" className="userPhoto" /> 
                    <span className='UserName'>{AllArtist.name}</span>
                    <span className='inst'>
                        {AllArtist.Art}
                    </span>
                    <span className='Location'><Icon icon="ci:location-outline" />{AllArtist.Location}</span>
                    <span className='Oder'>
                        {AllArtist.oders}
                    </span>
                    <span className='Button'>
                       Show Profile
                    </span>
                </div>
                </div>
                    )
                })}
                </div>
                
        </div>
        
    </div>
    <div className="profileCon">
        <span className="fii"></span>
        <span className="fiil"></span>
        <span className="fiil1"></span>
        <div className="ProfileItem">
            <ArtistProfile />
        </div>
    </div>
   </div>
   </div>
  )
}

export default Allartist