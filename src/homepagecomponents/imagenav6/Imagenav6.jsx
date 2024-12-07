import React from 'react'
import './Imagenav6.css'
import { imagenav6images } from '../../imagesfolder/imagesfolder'
import { Link } from 'react-router-dom'
const Imagenav6 = () => {
    
  return (
<>
<div className="imagenav6container">
    <div className="imagenav6content">
        <div className="imagenav6title1"><h3>This Week's Top Sellers</h3></div>
        <div className="imagenav6title2"><h3>Shop by Category</h3></div>
        <div className="imagenav6row">
            {imagenav6images.map((item)=>{
              return (
                <Link to ={`/${item.name}`}>

<div className="imagenav6col">
                <div className="imagenav6image" key={item.id}>
                <img src={`${item.image}`} alt="image" />
                </div>
                    <div className="imagenav6name"><h3>{item.name}</h3></div>
                </div>
                </Link>
              )
                
            })}
        </div>
    </div>
</div>
</>
  )
}

export default Imagenav6