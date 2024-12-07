import React from 'react'
import {Link} from 'react-router-dom'
import './Nav1.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Nav1 = () => {
  return (
    <>
    <div className="nav1container">
        <Link className='nav1link' to="/contact">Contact & FAQs</Link>
        <Link className='nav1link' to="/delivery">Delivery</Link>
        <Link className='nav1link' to="/returns">Returns</Link>
        <Link className='nav1link' to="trackorders">Track Orders</Link>
        <Link className='nav1link' to="/share">Share Your Ideas</Link>
        <Link className='nav1link' to="giftcards">Gift Cards</Link>
    </div>
    
    </>
  )
}

export default Nav1