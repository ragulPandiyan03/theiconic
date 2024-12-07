import React from "react";
import "./Nav2navlink2.css";
import { Link } from "react-router-dom";
const Nav2navlink2 = () => {
  return (
    <>
      <div className="nav2navlink2container">
        <Link className="nav2link2" to="/newin">NEW IN</Link>
        <Link className="nav2link2" to="/christmas">CHRISTMAS</Link>
        <Link className="nav2link2" to="/clothing">CLOTHING</Link>
        <Link className="nav2link2" to="/shoes">SHOES</Link>
        <Link className="nav2link2" to="/accessories">ACCESSORIES</Link>
        <Link className="nav2link2" to="/sport">SPORT</Link>
        <Link className="nav2link2" to="/brands">BRANDS</Link>
        <Link className="nav2link2" to="/designer">DESIGNER</Link>
        <Link className="nav2link2" to="/sneakerhub">SNEAKERHUB</Link>
        <Link className="nav2link2" to="/sale">SALE</Link>
      </div>

     
    </>
  );
};

export default Nav2navlink2;
