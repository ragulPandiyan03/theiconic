import React, { useEffect } from 'react'
import './Cart.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cartCount,setCartCount]=useState(0);
  const item=useSelector((state)=>state.addToCart);
  console.log(item);
  
  return (
   <>
   <div className="cartcontainer">
    <div className="cart">
    <Link to="/Cartpage"><h1><i class="fa-solid fa-bag-shopping"></i><span>{item.length > 0 ? item.length:""}</span></h1></Link>  
     
    </div>
   </div>
   </>
  )
}

export default Cart