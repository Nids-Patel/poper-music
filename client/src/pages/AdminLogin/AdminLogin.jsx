import React from 'react'
import './AdminLogin.css'
import logo from '../../img/poper.png'

function SignUp() {
    
     console.log("hello")
  
  }

const ArtistLogin = () => {
  return (
    
   <div className="AdminLogin">
    <div className='bg'>
        <img src={logo}  className="p-logo"/>
    <div className="login">
    <span className='lable'>Login</span>
    
  <span className='lab'> Email:- </span><input type={'email'} name="email" className='email collecter' placeholder='Enter Your Email'/><br/>
  <span className='lab1'> Password:-</span> <input className='collecter'  type={'password'} name="email" placeholder='Enter Passwrd ' /><br />
<span className='info'>Lorem Ipsum is simply dummy text of the printing and<br />  Lorem Ipsum has been the industry's standard dummy text ever since thse <br/>     </span>
 <div className="buttons">
    <button type="submit" lable="Login" 
    className='L-button'>Login</button>
    
    </div>

    {/* <button onClick={()=> SignUp()}> Sign Up</button> */}
   </div>
   </div>
   </div>
  )
}


export default ArtistLogin