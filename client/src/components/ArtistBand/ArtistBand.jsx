import React from 'react'
import './ArtistBand.css'
import { BandInfo } from '../../Data/FriendList'

const ArtistBand = () => {
  return (
    <div className="ArtistBand">
                <span className="had">
                    Your Band:-
                </span>
    {BandInfo.map((BandInfo , id) =>{
        return(
            
            <div className="BandCover">
             <img 
                src={ BandInfo.img } 
                className="bandlogo"/>
                <div id='spanCon'>
                <span className="bandName">
                    { BandInfo.name }
                </span>
                <p className="Subscribers">
                    { BandInfo.sub }
                </p>
                </div>
                <div className="showMore">
                    More
                </div>
                <div className="shows">
                    125 shows
                </div>
             </div>
        )
    })}

   </div>
  )
}

export default ArtistBand
