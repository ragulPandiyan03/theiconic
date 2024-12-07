import React from 'react'
import { Link } from 'react-router-dom'
import './Loginheader.css'
const Loginheader = () => {
  return (
    <div className="loginheadercontainer1">
        <div className="loginheadercontent1">
        <Link className='loginlink' to={"/"}><h5>Continue Shopping</h5></Link>
        <Link className='loginlink' to={"/"}><h2>THE ICONIC</h2></Link>
        <Link className='loginlink' to={"/contact"}><h5>Contact & FAQs</h5></Link>
        </div>

      
    </div>
  )
}

export default Loginheader