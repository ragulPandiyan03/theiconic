import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const datas = useSelector((state) => state.addToCart);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
   
    const total = datas.reduce((sum, item) =>sum + item.count * item.price, 0);
    console.log(total);

    setTotalCount(total);
  }, [datas]); 

  console.log(totalCount);

  return (
    <>
      <div className="checkout-container">
        <h5>Order Summary</h5>
        <hr />
        <div className="total-count">
          <p>Subtotal - {datas.length} {datas.length > 1 ? "Items":"Item"} </p>
          <p>${totalCount}</p>
        </div>
        <div className="estimatedshipping">
          <p>Estimated shipping</p>
          <p style={{color:"green",fontWeight:"bold"}}>FREE</p>
        </div>
        <div className="returnsfree">
          <p>Returns within 30 days unless marked</p>
          <p style={{color:"green",fontWeight:"bold"}}>FREE</p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
