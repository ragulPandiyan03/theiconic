import React from 'react'
import './Cartpage.css'
import { useSelector } from 'react-redux'
import { handleItemSpecificCountReducer } from '../reducer/Reducer'
import { addToCart } from '../action/Action'
import Cartpagenav1 from './cartpagecomponents/cartpagenav1/Cartpagenav1'
import Cartpagenav2 from './cartpagecomponents/cartpagenav2/Cartpagenav2'
import Checkout from '../checkout/Checkout'
import { useNavigate } from 'react-router-dom'

const Cartpage = () => {

  const navigate=useNavigate();
  const data=useSelector((state)=>state. handleSpecificItemCountReducer);
  const datas=useSelector((state)=>state.addToCart);
  console.log(data);
  console.log(datas);
 
  const handleRedirectToLogin=()=>{
navigate("/loginpage")
  }
  
  return (
   <>
   <div className="cartpagecontainer">
    <div className="cartpagecontent">
      <Cartpagenav1/>
      <div className="contentcartpage">
        <div className="componentcartpagenav2">
        <Cartpagenav2/>
        </div>
    <div className="componentcheckoutpage">
    <Checkout/>
    <button className='continuetocheckout' onClick={handleRedirectToLogin}>CONTINUE TO CHECKOUT</button>
    </div>
    
      </div>
     
    </div>
   </div>
   </>
  )
}

export default Cartpage