import React from 'react'
import './Admin.css'
import AdminNav from '../../components/AdminNav/AdminNav.jsx' 
import Maincom from '../../components/Maincom/Maincom'

const Admin = () => {
  return (
   <div className="Admin">
    
     <span className='fillter'></span>
     <span className='fillter1'></span>
     <span className='fillter2'></span>
     <div className="container">
    <div className="navContainer">
    <AdminNav />
    </div>
    <div className="MainContainer">
     <Maincom />
    </div>
    </div>
   </div>
  )
}

export default Admin
