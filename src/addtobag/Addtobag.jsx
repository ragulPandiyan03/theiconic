import React, { useEffect } from "react";
import "./Addtobag.css";
import { addToCart } from "../action/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { itemDisplayStatus } from "../action/Action";
import { handleSpecificItemCount } from "../action/Action";
const Addtobag = ({ product, handleCount, addCartItem }) => {
  const datas = useSelector((state) => state.addToCart);
  console.log(datas);
  const getStatus = datas.some((item) => item.id === addCartItem.id);
  console.log(getStatus);
  
  
  const [itemCount, setItemCount] = useState(0);
  const [specificItemCount,setSpecificItemCount]=useState({
    id:"",
    count:0,
  })


  const dispatch = useDispatch();


 
  const handleAddToCart = () => {
   const newCount=itemCount + 1;
    dispatch(itemDisplayStatus(true));
   
    if (!getStatus) {
      dispatch(addToCart(addCartItem));
      setSpecificItemCount({
        id: addCartItem.id,
        count:newCount,
      });
      dispatch(handleSpecificItemCount({ id: addCartItem.id, count: newCount }));
    } else {
      alert("Item Already in Cart...");
    }
  
    handleCount(itemCount);
  };
  console.log(itemCount);
  console.log(specificItemCount);
  
  return (
    <>
      <div className="addtobagcontainer">
        <div className="addtobagcontent">
          <button onClick={handleAddToCart} className="addtobagbutton">
            ADD TO BAG
          </button>
        </div>
      </div>
    </>
  );
};

export default Addtobag;
