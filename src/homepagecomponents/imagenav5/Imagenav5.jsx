import React from 'react'
import './Imagenav5.css'
const Imagenav5 = () => {
    const images=[
        {
            id:1,
            image:"https://www.ragavi.in/cdn/shop/files/Rakhi_Sale_Banner-_mobile_550x.progressive.png.jpg?v=1721389511",
        },
        {
            id:2,
            image:"https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg",
        }
    ]
  return (
   <>
   <div className="imagenav5container">
    <div className="imagenav5content">
        <div className="imagenav5row">
            {images.map((item)=>{
                return  <div className="imagenav5col" key={item.id}>
                <img src={`${item.image}`} alt="image" />
                </div>
            })}
        </div>
    </div>
   </div>
   </>
  )
}

export default Imagenav5