import React from 'react'
import './BandProfile.css'
import img4 from "../../img/img2.png";
import { Icon } from '@iconify/react';

const ArtistProfile = () => {
  return (
   <div className="ArtistProfile">
    <img src={img4} alt="Profile pic" className="Profile-pic" />
    <p className='UserName-P'>@ mitansh</p>
    <p className='b-day-P'><Icon icon="cil:birthday-cake" />30/06/2006</p>
    <p className='UserName-P1'>Band:- YoYo </p>
    
    <div className="invitaion">
      <div className="odersGet">
        <span className="OdersResived">
          Oders Get
        </span>

        <span className='ONumber'>27</span>
      </div>
      
      <div className="CompletJob">
      <span className="Compled">
      Complet Job
        </span>
        <span className='ONumber'>18</span>

      </div>
      </div>
      <div className="personalDetail">
        <span className='p-lable'>
          Personal Details:-
        </span><br /><br/>
        <span className="fristName">
          <b>Name:-</b> Patel Mitansh Rajendrabhai
        </span><br/>
        <span className="InstrumentsP">
          <b>Instruments:-</b> Violin,
Guitar,
Cello,
Harp
<br/>
        </span>
       
        <span className="Address-P">
       <b>Address:-</b> 244,Amizra Resident Bamroly Gam ,Surat
        </span><br/>
        <span className="Phone-P">
       <b><Icon icon="bx:phone" /></b> +91 9484753706
        </span>
        <span className="Phone-P">
       <b><Icon icon="fluent:mail-16-filled" /></b> mitanshpatel99"gmail.com
        </span>
      </div>
   </div>
  )
}

export default ArtistProfile