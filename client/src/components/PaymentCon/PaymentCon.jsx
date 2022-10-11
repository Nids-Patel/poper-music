import React from 'react'
import { Icon } from '@iconify/react'
import './PaymentCon.css'
import paycompo from '../paycompo/paycompo.jsx'

const payChart = () => {
  return (
    <div className="paymentChart">
        <div className="chartOfIncom">
         
         </div>
         <div className="paymentmehod">
           <div className="had">
             <span className='had-name'>Quick Payment :-</span>
           </div>
           <div className="containtPay">
             <label className='lable'>MY Cards :-</label>
             <select value="cards" className='option'>
             <option value="cards"className='cardsDetal'>
              <span> BANK OF BARODA </span><span className='cardNumb' >
                 **** **** **** 2548 </span> 
             </option>
             <option value="cards" className='cardsDetal'>
              <span> SBI </span><span className='cardNumb'>
                 **** **** **** 8546 </span> 
             </option>
             <option value="cards" className='cardsDetal'>
               <span>AXIS BANK</span><span className='cardNumb'>
                 **** **** **** 7845 </span> 
             </option>
             <option value="cards" className='cardsDetal'>
             <span> HDFC BANK</span><span className='cardNumb'>
                 **** **** **** 210 </span> 
             </option>
             </select>
             <div className="id">
             <label className='lable topL'>Enter user ID :-</label>
             <input type={'text'} className="idContaint" placeholder='Enter User ID' /><Icon icon="ic:baseline-verified" className='IDVerifie' />
             </div>
             <div className="id">
             <label className='lable topL'>Enter Ammount :-</label>
             <input type={'text'} className="idContaint Ammount" placeholder='Enter Ammount' />
             </div>
             <div className="id">
             <label className='lable topL'>Enter Password :-</label>
             <input type={'text'} className="idContaint" placeholder='Enter Ammount' />
             
             </div>
             <button className="bton">
               Pay Now
             </button>
           </div>
           <paycompo />
         </div>
         
    </div>
  )
}

export default payChart
