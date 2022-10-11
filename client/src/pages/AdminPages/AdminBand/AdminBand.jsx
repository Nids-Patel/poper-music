import { Icon } from '@iconify/react'
import React from 'react'
import BandCom from '../../../components/BandCom/BandCom'

const AdminBand = () => {
  return (
    <div className="AdminBand">
         <div className="dashbord">
          <span id="dash">
           Band
            <Icon 
            icon="ci:notification-dot" className="noti" />
            <Icon icon="clarity:chat-bubble-solid-badged" className="chat"  />
          </span>
        </div>
        {/* Artist info imort heare */}
        <BandCom />
    </div>
  )
}

export default AdminBand