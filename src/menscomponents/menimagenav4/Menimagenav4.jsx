import React, { useContext } from 'react'
import './Menimmagenav4.css'
import {Link} from 'react-router-dom'
import { Context } from '../../components/main/Main'
const Menimagenav4 = () => {
    const getProducts=useContext(Context);
    console.log(getProducts);
    
  return (
    <>
   <div className="menimagenav4container">

    <div className="menimagenav4content">
    <div className="menimagenav4title"><h2>This Week’s Top Sellers</h2> </div>
    <div className="cardcontents">
    <div className="menimagenav4cardcontent content1">
            <div className="menimagenav4cardcontentrow">
                {getProducts[0].map((item)=>{
                    return <Link className='displayproductdetaillink/' to={`/displayproductdetails/${item.id}`}>
                    <div className="menimagenav4cardcontentcol">
                        <img src={item.image} alt="image" />
                        <div className="colcarddetails">
                            <div className="name"><h3>{item.name}</h3></div>
                            <div className="itemtype"><h4>{item.type}</h4></div>
                            <div className="itemprice"><h4>{item.price}</h4></div>
                            <div className="itemoffer"><h5>{item.offer > 0 ? `${item.offer}%` : ""}{item.offer > 0 ? item.offerlimit : ""}</h5></div>
                        </div>
                    </div>
                    </Link> 
                })}
            </div>
        </div>
         {/* second card */}
         <div className="menimagenav4cardcontent content2">
        <div className="menimagenav4cardcontentrow">
                {getProducts[1].map((item)=>{
                    return  <Link className='displayproductdetaillink' to="/displayproductdetails"><div className="menimagenav4cardcontentcol">
                    <img src={item.image} alt="image" />
                    <div className="colcarddetails">
                        <div className="name"><h3>{item.name}</h3></div>
                        <div className="itemtype"><h4>{item.type}</h4></div>
                        <div className="itemprice"><h4>{item.price}</h4></div>
                        <div className="itemoffer"><h5>{item.offer > 0 ? `${item.offer}%` : ""}{item.offer > 0 ? item.offerlimit : ""}</h5></div>
                    </div>
                </div></Link>
                })}
            </div>
        </div>
    </div>
       

       
    </div>
   </div>
    
    </>
  )
}

export default Menimagenav4