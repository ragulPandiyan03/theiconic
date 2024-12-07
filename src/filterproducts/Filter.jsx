import React from "react";
import "./Filter.css";
const Filter = () => {
  return (
    <>
      <div className="filtercontainer">
        <div className="filtercontent">
          <div className="filtercontent1">
            <h2>Kids Dolls All products</h2>
          </div>
          <hr />
          <div className="filtercontent2">
            <div className="filtercontent2title">
              <p className="gender">Gender</p>
              <hr />

              <div className="gendertype">
                <p className="genderlist">Boys</p>
                <p className="genderlist">Girls</p>
              </div>
            </div>
          </div>
          <div className="filtercontent3">
            <div className="filtercontent3title">
              <h4>Filter</h4>
              <p>Clear all</p>
            </div>
            <hr />
            <div className="subcategorydiv">
              <div className="subcategorytitle">
                <p>Sub-Category</p>
              </div>
              <hr />
              <div className="subcategoryitems">
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>All Types</p>
                </div>
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>Doll Clothes & Accessories</p>
                </div>
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>Plush Dools</p>
                </div>
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>Barbie Dolls</p>
                </div>
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>Doll Playsets</p>
                </div>
                <div className="subcategoryitem">
                  <input type="checkbox" />
                  <p>Doll Houses</p>
                </div>
              </div>
            </div>

            <div className="pricediv">
              <div className="pricetitle">
                <p>Price</p>
              </div>
             
              <div className="priceitems1">
                <div className="priceitem1">
                  <h5>Min</h5>
                  <input type="text" placeholder="$ 0" />
                </div>
                <div className="priceitem2">
                  <h5>Max</h5>
                  <input type="text" placeholder="$ Any" />
                </div>
              </div>
            </div>
            <hr />
            <div className="newarrivaldiv">
              <p>New Arrivals Only</p>
              <input type="radio" name="" id="" />
            </div>
            <hr />
            <div className="sizediv">
              <div className="sizetitle">
                <p>Size</p>
              </div>
              <hr />
              <div className="sizeitems">
                <p className="sizeitem">
                  <input type="checkbox" name="" id="" />
                  <p>All Size</p>
                </p>
                <p className="sizeitem">
                  <input type="checkbox" name="" id="" />
                  <p>One Size</p>
                </p>
              </div>
            </div>
            <div className="branddiv">
                <div className="brandtitle"><p>Brand</p></div>
                <hr />
              <div className="brandsearch">
                <input type="search" name="" id="" />
              </div>
              <div className="branditems">
                <p className="branditem">
                  <input type="checkbox" name="" id="" />
                  <p>All Brands</p>
                </p>
                <p className="branditem">
                  <input type="checkbox" name="" id="" />
                  <p>Bambini</p>
                </p>
                <p className="branditem">
                  <input type="checkbox" name="" id="" />
                  <p>Our Generation</p>
                </p>
                <p className="branditem">
                  <input type="checkbox" name="" id="" />
                  <p>Saint Germain</p>
                </p>
              </div>
            </div>
            <div className="colorsdiv">
              <div className="colorstitle"><p>Colour</p></div>
              
              <div className="coloritems">
                <p className="coloritem">
                  <input type="checkbox" name="" id="" />
                  <p>All Colours</p>
                </p>
                <p className="coloritem">
                  <input type="checkbox" name="" id="" />
                  <p>Multi</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
