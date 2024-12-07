import React from "react";
import "./Itemdisplay.css";
import { useSelector } from "react-redux";
import { addToCart } from "../action/Action";
import { useState } from "react";
import { itemDisplayStatus } from "../action/Action";
import { useDispatch } from "react-redux";
import { itemDisplayStatusReducer } from "../reducer/Reducer";
import {useNavigate} from 'react-router-dom'
const Itemdisplay = ({ addCartItem }) => {
    const displayStatus=useSelector((state)=>state.itemDisplayStatusReducer);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  console.log(addCartItem);
  const navigate=useNavigate();
  console.log(displayStatus);
  const handleItemdisplay = () => {
    setStatus(!status);
    console.log(status);
    
    dispatch(itemDisplayStatus(status));
  };

  const redirectToCartPage=()=>{
    dispatch(itemDisplayStatus(false));
    setStatus(false)
    navigate("/cartpage")
  }
  console.log(status);
  
  return (
    <>
      { displayStatus && (
        <div className="itemdisplaycontainer2">
          <div className="successtitle">
            <h3>Success!</h3>
            <h3>
              <i class="fa-solid fa-x" onClick={handleItemdisplay}></i>
            </h3>
          </div>
          <div className="titlemessage">
            <h3>You've added this item to your bag.</h3>
          </div>
          <div className="itemdisplaycontent">
            <div className="itemdisplaycard">
              <div className="image">
                <img src={addCartItem.img} alt="image" />
              </div>
              <div className="itemdisplaycarddetails">
                <div className="name">
                  <h5>{addCartItem.name}</h5>
                </div>
                <div className="type">
                  <h4>{addCartItem.type}</h4>
                </div>
                <div className="price">
                  <h5>
                    {addCartItem.price} <br />
                    <p>Price Matched</p>
                  </h5>
                </div>
                <div className="quantity">
                  <p>Qty : {addCartItem.count}</p>
                </div>
                <div className="color">
                  <p>color : {addCartItem.color}</p>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="continueshopping">CONTINUE SHOPPING</button>
              <button className="viewbag" onClick={redirectToCartPage}>VIEW BAG</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Itemdisplay; 