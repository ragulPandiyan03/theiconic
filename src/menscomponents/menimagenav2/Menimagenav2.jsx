import React from 'react'
import './Menimagenav2.css'
const Menimagenav2 = () => {
    const images=[
        {
            id:1,
            image:"https://th.bing.com/th/id/OIP.DeFs5KD4iqQKgeLtxEa1vwHaJ0?pid=ImgDet&w=191&h=253&c=7"
        },
        {
            id:2,
            image:"https://th.bing.com/th/id/OIP.sFlIiZ1avUco5QKYWFLArQHaG1?pid=ImgDet&w=191&h=176&c=7"
        },
        {
            id:3,
            image:"https://th.bing.com/th/id/OIP.0eUTCzvLR2Sd9QOXqJq0fwAAAA?rs=1&pid=ImgDetMain"
        },
        {
            id:4,
            image:"https://i.pinimg.com/originals/87/cc/d5/87ccd566a52c1e923d3251de03129e15.jpg"
        },
    ]
  return (
    <>
    <div className="menimagenav2container">
        <div className="menimagenav2content">
            <div className="menimagenav2row">
                {images.map((item)=>{
                    return <div className="menimagenav2col" key={item.id}>
                        <img src={item.image} alt="" />
                    </div>
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Menimagenav2