import React from 'react'
import Toysfolder1 from './toysfolder/toysfolder1/Toysfolder1'
import Filter from '../../../../filterproducts/Filter'
import './Toys.css'
const Toys = () => {
  return (
   <>
   <div className="toyscontainer">
    <div className="toyscontent">
   
    <div className="toyscontent1"> <Toysfolder1/></div>
    <div className="toyscontent2">
      <Filter/>
    </div>
    </div>
  
   </div>
   </>
  )
}

export default Toys