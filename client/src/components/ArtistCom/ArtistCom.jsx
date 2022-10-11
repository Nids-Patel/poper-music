import React from 'react'
import './ArtistCom.css'
import { Icon } from '@iconify/react'
import Artistinfo from "../../components/Artistinfo/Artistinfo.jsx"

const ArtistCom = () => {
  return (
    <div className='ArtistCom'>

        <div className="searchBar">
            
           <li className='search-li'>
           <span className='filter'><abbr title='Filter'><Icon icon="bi:filter-right" /></abbr></span>
           <span className='filter'><abbr title='Favorite Artist'><Icon icon="carbon:user-favorite" /></abbr></span>
           <div className='all'><Icon icon="foundation:torsos-all" style={{marginRight:'7px', fontSize:'17px',marginLeft:'7px'}}/> All Artist</div>
          <input type={"text"} className="searchUser" placeholder="Search.." />
          <Icon icon="bx:search-alt" className="searchIcon" />

         
        </li>
         <hr className='lineNO' />
        </div>
       

        <span id='top'>Top Artist</span>
        <Artistinfo />
        <div className="latest" id="latest"> Latest news arriver heare .....</div>
        </div>
  )
}

export default ArtistCom    