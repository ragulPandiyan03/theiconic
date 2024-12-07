import React from 'react'
import './Imagenav2.css'
const Imagenav2 = () => {

    const images=[
        {
            id:1,
            image:"https://th.bing.com/th/id/OIP.t3hHdzeY5qWocqb6HFe9nwHaK3?pid=ImgDet&w=191&h=280&c=7"
        },
        {
            id:2,
            image:"https://th.bing.com/th/id/OIP.g6TH7HVNK0RRgQj8bnC2hQAAAA?pid=ImgDet&w=191&h=280&c=7"
        },
        {
            id:3,
            image:"https://th.bing.com/th/id/OIP.IhgoJm5YpPB8cGFsyzChQwAAAA?pid=ImgDet&w=191&h=286&c=7"
        },
    ]

  return (
   <>
   <div className="imagenav2container">
    <div className="imagenav2row">
    {images.map((item)=>{
return <div className="imagenav2col" key={item.id}>
    <img src={item.image} alt="image" />
</div>
})}
    </div>
   </div>
   
   </>
  )
}

export default Imagenav2