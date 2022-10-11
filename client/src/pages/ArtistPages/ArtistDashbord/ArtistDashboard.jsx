import React from 'react'
import ArtistNav from '../../../components/ArtistNav/ArtistNav'
import './ArtistDashboard.css'
import ArtistComponents from "../../../components/ArtistComponents/ArtistComponents"

const ArtistDashboard = () => {
  return (
    <div className="ArtistDashboard">
        <div className="ArtistNavigation">
             <ArtistNav />
        </div>
        <div className="mainContainar">
            <ArtistComponents />
        </div>
    </div>
  )
}

export default ArtistDashboard