import React from 'react'
import './Menimagenav5.css'
const Menimagenav5 = () => {
    const images=[
        {
            id:1,
            image:"https://th.bing.com/th/id/OIP.4QwTYNHL6-7k352oTIlzPwHaHa?w=176&h=192&c=7&r=0&o=5&pid=1.7",
            title:"Get Ahead For Christmas",
            content:"Want to up your gifting game? Give them their most-wished-for sportswear, sneakers and lifestyle essentials.",
        },
        {
            id:2,
            image:"https://th.bing.com/th/id/OIP.rMsywbqO8UpoOYZEKAN-NwHaJQ?w=145&h=181&c=7&r=0&o=5&pid=1.7",
            title:"Christmas: Incoming",
            content:"And so are the invites. Whether it's a casual catch-up or you want to stand out in style, shop failsafe looks for every date in your calendar.",
        },
    ]
  return (
    <>
    <div className="menimagenav5container">
        <div className="menimagenav5content">
            <div className="menimagenav5row">
                {images.map((item)=>{
                   return  <div className="menimagenav5col">
                        <img src={item.image} alt="image" />
                        <div className="detailscard">
                            <div className="title"><h2>{item.title}</h2></div>
                            <div className="cardcontent"><p>{item.content}</p></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Menimagenav5