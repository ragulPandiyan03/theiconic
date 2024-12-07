import React from 'react'
import './Nav2.css'

import Title from '../title/Title'
import Nav2link from '../nav2navlink/Nav2link'
import Search from '../search/Search'
import Cart from '../cart/Cart'
import Nav2navlink2 from '../nav2navlink2/Nav2navlink2'
const Nav2 = () => {
  return (
    <>
    <div className="maincontainernav2">
      <div className="nav2content">
      <div className="nav2container">
    
    <Title/>
        <Nav2link/>
        <Search/>
        <Cart/>
      
    </div>
    <div className="nav2container2">
      <Nav2navlink2/>
    </div>
      </div>
    
    </div>
    
    </>
  )
}

export default Nav2