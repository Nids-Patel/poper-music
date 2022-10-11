import React from 'react'
import './ArtistSignup.css'
import logo from '../../img/poper.png'
import { Icon } from '@iconify/react'

const ArtistSignup = () => {
  return (
    <div className="ArtistSignup">
      
    
   <div className="AdminLogin">
    <div className='bg'>
        <img src={logo}  className="p-logo"/>
    <div className="login">

    
    <Icon icon="noto-v1:musical-score"  className='sticker'/>
    <span className='lable'>Sign Up</span>
    
  <span className='lab'> Name:- </span><input type={'Text'} name="email" className='email collecter' placeholder='Enter Your Email'/><br/>

  <span className='lab1'> Email:-</span> <input className='collecter'  type={'email'} name="email" placeholder='Enter Passwrd ' /><br />
  <span className='lab2'> Birth date:-</span> <input className='collecter'  type={'date'} name="email" placeholder='Enter Passwrd ' /><br />
<span className='info'><input  type={"checkbox"}/>Lorem Ipsum is simply dummy text of the printing and<br />  Lorem Ipsum has been the industry's standard dummy text ever since thse <br/>     </span>
 <div className="buttons">
    <button type="submit" lable="Login" 
    className='L-button'>Login</button>
    
    </div>

    {/* <button onClick={()=> SignUp()}> Sign Up</button> */}
   </div>
   </div>
   </div>
  
    </div>
  )
}

export default ArtistSignup