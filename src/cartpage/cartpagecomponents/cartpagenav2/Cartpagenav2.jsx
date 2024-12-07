import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSpecificItemCount } from "../../../action/Action";
import "./Cartpagenav2.css";

const Cartpagenav2 = () => {
  const cartDatas = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  // Handle count change
  const handleCount = (id, event) => {
    const newCount = parseInt(event.target.value, 10);
    dispatch(handleSpecificItemCount(id, newCount));
    [...Array(5)].map((item)=>{
        console.log(item);
        
    })
    
  };

  return (
    <>
      <div className="cartpagenav2container">
        <div className="cartpagenav2content">
          <div className="cartpagenav2row">
            {cartDatas.map((item) => (
              <div className="cartpagenav2col" key={item.id}>
                <div className="cartpagenav2image">
                  <img src={item.img} alt="product" />
                </div>
                <div className="cartpagenav2itemdetails">
                  <h5>{item.name}</h5>
                  <h6>{item.type}</h6>
                  <p>{item.price}</p>
                  <p>{item.offer} OFF APPLIED</p>
                  <p>
                    Item cannot be returned or <br />
                    exchanged unless faulty
                  </p>
                  <p>Colour: {item.color}</p>
                  <div className="countsizecontainer">
                    <div className="cartpagenav2count">
                      <select
                        value={item.count}
                        onChange={(event) => handleCount(item.id, event)}
                      >
                        {[...Array(5)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cartpagenav2size">
                        {item.size}
                    </div>
                    <div className="itemtotalprice">
                      {`$${item.count * item.price}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpagenav2;
