import React from 'react'
import './Artist.css'
import ArtistLogin from "../ArtistLogin/ArtistLogin"
import ArtistSignup from '../ArtistSignup/ArtistSignup'
import ArtistDashboard from '../ArtistPages/ArtistDashbord/ArtistDashboard'

const Artist = () => {
  return (
   <div className="Artist">
    {/* <ArtistLogin /> */}
    {/* <ArtistSignup /> */}
     <ArtistDashboard />
   </div>
  )
}

export default Artist