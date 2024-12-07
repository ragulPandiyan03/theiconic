import React from 'react'
import './Displayproductdetails.css'
import { useParams } from 'react-router-dom'
import { Context } from '../components/main/Main'
import { useContext } from 'react'
import Displayimagenav1 from './displayproductcomponents/displayimagenav1/Displayimagenav1'
import Displayimagenav2 from './displayproductcomponents/displayimagenav2/Displayimagenav2'
import Addtobag from '../addtobag/Addtobag'
const Displayproductdetails = () => {
  const products=useContext(Context);
  const {id}=useParams();
  const product=products[0].find((item)=>item.id === Number(id));
  console.log(product);
  
  return (
    <>
    <div className="displayproductdetailscontainer">
      <div className="displayproductdetailscontent">
<div className="displaycomponent1">
  <Displayimagenav1 product={product}/>
</div>
<div className="displaycomponent2">
  <Displayimagenav2 product={product}/>
</div>
      </div>
     
    </div>
    </>
  )
}

export default Displayproductdetails