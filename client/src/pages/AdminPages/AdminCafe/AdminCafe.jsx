import { Icon } from '@iconify/react'
import React from 'react'
import CafeCom from '../../../components/CafeCom/CafeCom'

const AdminBand = () => {
  return (
    <div className="AdminBand">
         <div className="dashbord">
          <span id="dash">
           Cafe
            <Icon 
            icon="ci:notification-dot" className="noti" />
            <Icon icon="clarity:chat-bubble-solid-badged" className="chat"  />
          </span>
        </div>
        {/* Artist info imort heare */}
        <CafeCom />
    </div>
  )
}

export default AdminBand