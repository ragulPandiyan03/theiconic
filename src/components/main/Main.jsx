import React, { useEffect, useState } from "react";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Nav1 from "../nav1/Nav1";
import Nav2 from "../nav2/Nav2";
import Homepage from "../Homepage/Homepage";
import Contact from "../nav1components/Contact/Contact";
import Delivery from "../nav1components/delivery/Delivery";
import Returns from "../nav1components/returns/Returns";
import Trackorders from "../nav1components/trackorders/Trackorders";
import Share from "../nav1components/shareyourideas/Share";
import Giftcards from "../nav1components/giftcards/Giftcards";
import Women from "../nav2navlinkcomponents/women/Women";
import Men from "../nav2navlinkcomponents/men/Men";
import Sport from "../nav2navlinkcomponents/sport/Sport";
import Kids from "../nav2navlinkcomponents/kids/Kids";
import Beauty from "../nav2navlinkcomponents/beauty/Beauty";
import Newin from "../nav2navlink2components/newin/Newin";
import Christmas from "../nav2navlink2components/christmas/Christmas";
import Clothing from "../nav2navlink2components/clothing/Clothing";
import Shoes from "../nav2navlink2components/shoes/Shoes";
import Accessories from "../nav2navlink2components/accessories/Accessories";
// import Sport from '../nav2navlinkcomponents/sport/Sport'
import Brands from "../nav2navlink2components/brands/Brands";
import Designer from "../nav2navlink2components/designer/Designer";
import Sneakerhub from "../nav2navlink2components/sneakerhub/Sneakerhub";
import Sale from "../nav2navlink2components/sale/Sale";
import Footer from "../footer/Footer";
import Displayproductdetails from "../../displayproductpage/Displayproductdetails";
import { createContext } from "react";
import Cart from "../cart/Cart";
import Cartpage from "../../cartpage/Cartpage";
import Loginpage from "../../loginpage/Loginpage";

import products1 from '../Produts1.json';
import products2 from '../Produts2.json';
import Register from "../../registerpage/Register";
import Loginheader from "../../loginpage/loginheader/Loginheader";
import Footwear from "../../homepagecomponents/imagenav3/imagenav3components/footwear/Footwear";
import Gifts from "../../homepagecomponents/imagenav3/imagenav3components/gifts/Gifts";
import Toys from "../../homepagecomponents/imagenav6/imagenav6components/toys/Toys";
export const Context = createContext();
const Main = () => {
    console.log(products1);
    
    
  let location = useLocation();
  const isLoginRegister = location.pathname === "/loginpage" || location.pathname === "/register";
 console.log(isLoginRegister);

 
// let layout = () =>{
//     let location = useLocation()
// }

// const location = useLocation(); // Get current path from useLocation hook
//     const [isLoginPage, setIsLoginPage] = useState(false); // Track if we're on login page

//     useEffect(() => {
//         // Check if the current path is "/loginpage"
//         setIsLoginPage(location.pathname === "/loginpage");
//     }, [location]); // Run when the location (path) changes



  return (
    <>
      <Context.Provider value={[products1, products2]}>
        
          {!isLoginRegister  && <Nav1/>}
          {!isLoginRegister  && <Nav2/>}
          {isLoginRegister && <Loginheader/>}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="trackorders" element={<Trackorders />} />
            <Route path="/share" element={<Share />} />
            <Route path="/giftcards" element={<Giftcards />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            {/* <Route path="/sport" element={<Sport/>}/> */}
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newin" element={<Newin />} />
            <Route path="/christmas" element={<Christmas />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/sneakerhub" element={<Sneakerhub />} />
            <Route path="/sale" element={<Sale />} />
            <Route
              path="/displayproductdetails/:id"
              element={<Displayproductdetails />}
            />
            <Route path="/cartpage" element={<Cartpage />} />
            <Route path="/loginpage" element={<Loginpage />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/footwear" element={<Footwear/>}/>
            <Route path="/gifts" element={<Gifts/>}/>

            <Route path="/toys" element={<Toys/>}/>
          </Routes>

          <Home />
          {!isLoginRegister && <Footer/>}
        
      </Context.Provider>
    </>
  );
};

export default Main;
