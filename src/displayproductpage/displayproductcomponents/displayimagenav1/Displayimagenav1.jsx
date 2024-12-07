import React from "react";
import "./Displayimagenav1.css";
import { useState } from "react";
const Displayimagenav1 = ({ product }) => {
  console.log(product.alterimages);
  const [mainImage, setMainImage] = useState(product.image);

  const handleChangeImage = (event) => {
    console.log(event.target.src);
    setMainImage(event.target.src);
  };
  return (
    <>
      <div className="displayimagenav1container">
        <div className="displayimagenav1content">
          <div className="sidebarimages">
            <img
              onClick={handleChangeImage}
              src={product.alterimages.image1}
              alt="image1"
            />
            <img
              onClick={handleChangeImage}
              src={product.alterimages.image2}
              alt="image2"
            />
            <img
              onClick={handleChangeImage}
              src={product.alterimages.image3}
              alt="image3"
            />
            <img
              onClick={handleChangeImage}
              src={product.alterimages.image4}
              alt="image4"
            />
          </div>
          <div className="mainimage">
            <img className="displayimagenav1mainimage" src={mainImage} alt="image" />
          </div>
        </div>
        <div className="productdetailscontainer">
          <div className="productdetailstitle">
            <h3>Product details</h3>
          </div>
          <p>SKU: RM801AA84IQX</p>
          <p>
            With craftsmanship at its core, R.M.Williams stands out as a proud
            Australian label that has provided leather boots and leather goods
            since its inception in 1932. The Mulyungarie Fleece Top by R.M.
            Williams is crafted from soft cotton jersey with premium fleece
            lining.
          </p>
          <p>
            - Cotton-rich jersey; fleece lined <br />
            - Zipped collar <br />
            - Flat knit cuffs and waistband <br />- Embroidered brand logo to
            chest
          </p>
        </div>
      </div>
    </>
  );
};

export default Displayimagenav1;
