import React from 'react'
import './ArtistIncom.css'
import { Icon } from '@iconify/react'

const ArtistIncom = () => {
  return (
    <div className="ArtistIncom">
        <div className="sections">
            <div className="ammount">
        <div className="money">
        <Icon icon="fa:dollar" />
        </div>
        <div className="rate">
             240
             </div>
        </div>
        <Icon icon="eva:more-vertical-outline"  className='more'/>
        <div className="odersDetails">
         <div className="LastMonth">Last Month: $120.0</div>
         <div className="Total">Total: $1020.0</div>
        </div>
        </div>

{/* line------------------------------------------- */}

        <div className="sections2 sections">
        <div className="ammount">
        <div className="money">
        <Icon icon="icon-park-solid:transaction-order" />
        </div>
        <div className="rate">
             53
             </div>
        </div>
        <Icon icon="eva:more-vertical-outline"  className='more'/>
        <div className="odersDetails">
         <div className="LastMonth">Last Month: 47</div>
         <div className="Total">Total: 125</div>
        </div>
        </div>
        
{/* line------------------------------------------ */}

        <div className="sections sections1">
        <div className="ammount">
        <div className="money">
        <Icon icon="ant-design:star-filled" />
        </div>
        <div className="rate">
             4.2
             </div>
        </div>
        <Icon icon="eva:more-vertical-outline"  className='more'/>
        <div className="odersDetails">
         <div className="LastMonth">Last Month: 4.0</div>
         <div className="Total">Avrage: 4.3</div>
        </div>
        </div>

{/* line----------------------------- */}

        <div className="sections">
        <div className="ammount">
        <div className="money">
        <Icon icon="ant-design:star-filled" />
        </div>
        <div className="rate">
             4.2
             </div>
        </div>
        <Icon icon="eva:more-vertical-outline"  className='more'/>
        <div className="odersDetails">
         <div className="LastMonth">Last Month: 4.0</div>
         <div className="Total">Avrage: 4.3</div>
        </div>
        </div>
    </div>
  )
}

export default ArtistIncom
