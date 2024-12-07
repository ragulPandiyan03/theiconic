import React from 'react'
import './Cartpagenav1.css'
import { useSelector } from 'react-redux'
import { addToCart } from '../../../action/Action'
const Cartpagenav1 = () => {
    const datas=useSelector((state)=>state.addToCart);
  return (
    <>
    <div className="cartpagenav1container">
        <div className="cartpagenav1content">
            <div>Bag {datas.length} items</div>
            <div disabled>SHIPPING</div>
            <div>PAYMENT</div>
        </div>
    </div>
    </>
  )
}

export default Cartpagenav1