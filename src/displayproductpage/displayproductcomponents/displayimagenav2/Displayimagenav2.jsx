import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "./Displayimagenav2.css";
import Sizecart from "../../sizecart/Sizecart";
import Addtobag from "../../../addtobag/Addtobag";
import Itemdisplay from "../../../itemdisplay/Itemdisplay";
import { useSelector } from "react-redux";
import { addItemCount } from "../../../reducer/Reducer";
const Displayimagenav2 = ({ product }) => {
  console.log(product);
const itemCount1=useSelector((state)=>state.addItemCount)
console.log(itemCount1);

  const [itemColor, setItemColor] = useState(null);
  const [itemSize, setItemSize] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const [addCartItem, setAddCartItem] = useState({
    img: product.image,
    name: product.name,
    type: product.type,
    color: null,
    size: null,
    count: 0,
  });

  useEffect(() => {
    setAddCartItem({
      id: product.id,
      img: product.image,
      price: product.price,
      name: product.name,
      type: product.type,
      color: itemColor,
      size: itemSize,
      count: 1,
    });
  }, [itemColor, itemSize, itemCount]);
  console.log(addCartItem);
  const handleColorOfTheItem = (event) => {
    console.log(event.target.style.border);
    setItemColor(event.target.style.border);
  };

  const handleItemSize = (event) => {
    console.log(event.target.value);
    setItemSize(event.target.value);
  };

  const handleCount = (count) => {
    setItemCount(count);
  };

  return (
    <>
      <div className="displayimagenav2container">
        <div className="displayimagenav2content">
          <div className="displayimagenav2title">
            <p>{product.name}</p>
            <p className="fav">Favourite</p>
          </div>
          <div className="displayimagenav4type">
            <h2>{product.type}</h2>
          </div>
          <div className="displayimagenav4price">${product.price}</div>
          <div className="paylaterconntent">
            Or 4 payments of 27.94 with our <span>buy now pay later</span>{" "}
            providers
          </div>
          <div className="colors">
            <div className="colortitle">
              <h5>Colors</h5>
            </div>
            <div className="colordiv">
              <div
                onClick={handleColorOfTheItem}
                className="color"
                style={{
                  border: `4px solid ${product.colors.color1}`,
                }}
              ></div>
              <div
                onClick={handleColorOfTheItem}
                className="color"
                style={{
                  border: `4px solid ${product.colors.color2}`,
                }}
              ></div>
              <div
                onClick={handleColorOfTheItem}
                className="color"
                style={{
                  border: `4px solid ${product.colors.color3}`,
                }}
              ></div>
            </div>
            <div className="pickasize">
              <div className="sizeoption">
                <select
                  onChange={handleItemSize}
                  className="selectsizeoption"
                  name=""
                  id=""
                >
                  <option value="Pick a Size">Pick A Size</option>
                  <option value="International S">INTL S</option>
                  <option value="International M">INTL M</option>
                  <option value="International L">INTL L</option>
                  <option value="International XL">INTL XL</option>
                  <option value="International XXL">INTL XXL</option>
                </select>
              </div>
              <div className="sizeCart">
                <Sizecart product={product} />
              </div>
            </div>
            {/* addtobag commponent */}
            <div className="cartaddcontainer">
              <Addtobag
                addCartItem={addCartItem}
                handleCount={handleCount}
                product={product}
              />
            </div>
            <div className="materialcontent">
              <div className="materialtitle">
                <h3>Material</h3>
              </div>
              <p>Material: Main: 80% Organic Cotton + 20% Recycled Polyester</p>
            </div>
            <div className="carecontainer">
              <div className="caretitle">
                <h3>Care</h3>
              </div>
              <p>Cold machine wash</p>
            </div>
            {/* delivery */}
            <div className="deliverycontainer">
              <div className="deliverytitle">
                <h3>Delivery</h3>
              </div>
              <p>Check your delivery time</p>
              <div className="inputfordelivery">
                <input type="text" placeholder="Enter suburb/postcode" />
                <button>Go!</button>
              </div>
            </div>
            {/* returns */}
            <div className="returnscontainer">
              <div className="returstitle">
                <h3>Returns</h3>
              </div>
              <p>*THE ICONIC returns are free for 30 days unless marked.</p>
            </div>
            {/* christmas */}
            <div className="christmascontainer">
              <div className="christmastitle">
                <h2>Christmas Season Returns</h2>
              </div>
              <p>
                Eligible items purchased between 11 November to 13 December 2024
                can be returned until 12 January 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="itemdisplaycontainer">
        <Itemdisplay addCartItem={addCartItem} />
      </div>
    </>
  );
};

export default Displayimagenav2;
