import React from "react";
import "./Sizecart.css";
import { useState } from "react";
const Sizecart = ({ product }) => {
const [status,setStatus]=useState(false);
    const handleCart=()=>{
        setStatus(!status);
    }
  return (
    <>
      <div className="sizecartcontainer">
        <button onClick={handleCart} className="sizecarttitle">SIZE GUIDE</button>
      </div>

      {status &&  <div  className="cartsizevalues">
        <div className="sizecarttitle">
          <div className="title"><h2>{`Size Guide - ${product.name} - ${product.type}`}</h2></div>
          <div className="titlemsg"><h4>{`size guide provided by ${product.name}`}</h4></div>
          <div className="sizecart">
            <table>
              <thead>
                <th>International</th>
                <th>XL</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>3XL</th>
                <th>4XL</th>
              </thead>
              <tbody>
                <td>NECK(CM)</td>
                <td>38.4</td>
                <td>38.7</td>
                <td>39.5</td>
                <td>40.5</td>
                <td>41.9</td>
                <td>43.5</td>
                <td>44.0</td>
                <td>45.2</td>
              </tbody>
              <tbody>
                <td>CHEST(CM)</td>
                <td>38.4</td>
                <td>38.7</td>
                <td>39.5</td>
                <td>40.5</td>
                <td>41.9</td>
                <td>43.5</td>
                <td>44.0</td>
                <td>45.2</td>
              </tbody>
              <tbody>
                <td>SLEEVE(CM)</td>
                <td>38.4</td>
                <td>38.7</td>
                <td>39.5</td>
                <td>40.5</td>
                <td>41.9</td>
                <td>43.5</td>
                <td>44.0</td>
                <td>45.2</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>}
     
    </>
  );
};

export default Sizecart;
