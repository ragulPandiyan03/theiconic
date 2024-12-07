import React from 'react'
import './Nav2link.css'
import {Link} from 'react-router-dom'
const Nav2link = () => {
  return (
   <>
   <div className="nav2linkcontainer">
    <Link className='nav2link' to="/women">WOMEN</Link>
    <Link className='nav2link' to="/men">MEN</Link>
    <Link className='nav2link' to="/kids">KIDS</Link>
    <Link className='nav2link' to="/sport">SPORT</Link>
    <Link className='nav2link' to="/beauty">BEAUTY</Link>
    <Link className='nav2link' to="/home">HOME</Link>
   </div>
   
   </>
  )
}

export default Nav2link