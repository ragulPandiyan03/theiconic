import React from 'react'
import './Toysfolder1.css'
import { Link } from 'react-router-dom'
const Toysfolder1 = () => {
  return (
   <>
   <div className="toysfoldercontainer">
    <div className="toysfoldercontent">
    <div className="content1">
<p className='hometoysnav'><Link to="/home">HOME</Link> / <Link to="/toys">TOYS</Link></p>
</div>
<div className="content21">
<p className='itemscount'>1666 items found</p>
</div>
<div className="content3">
    <select name="" id="">
        <option value="Popularity">Popularity</option>
        <option value="New Arrivals">New Arrivals</option>
        <option value="Price High To Low">Price High To Low</option>
        <option value="Price Low To High">Price Low To High</option>
        <option value="Brand A - Z">Brand A - Z</option>
        <option value="Brand Z - A">Brand Z - A</option>
    </select>
</div>
    </div>
<hr />
   </div>
   </>
  )
}

export default Toysfolder1