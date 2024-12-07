import React from 'react'
import './Footer.css'
const Footer = () => {
    const footerlinks=[
        {
            id:1,
            title:"THE ICONIC",
            links:["About Us","Acknowledgement Of Country","Affiliates","Partnerships","Influencers","Press","Careers","Terms & Connditions","Privacy Policy"]
        }
        ,
        {
            id:2,
            title:"HELP & SUPPORT",
            links:["FAQs & Contact","Delivery","Returns","Size Guide","Gift Cards","Fashion Glossary","Product Ideas","Product Recall","Warehouse Management System","Upgrade","Unauthorised Access"]
        },
        {
            id:3,
            title:"FOLLOW US",
            links:["Instagram","Facebook","Twitter","Pinterest","Youtube"]
        },
      
    ]
  return (
   <>
   
   <div className="footercontainer">
    <div className="footercontent">
        <div className="footerrow">
            {footerlinks.map((item)=>{
              return  <div className="footercol">
 <div className="title"><h4>{item.title}</h4></div>
 <ul>
    {item.links.map((itemlink)=>{
       return <li className="linkitem">{itemlink}</li>
    })}
 </ul>
                </div>
               
            })}
        </div>
        <div className="stayinntouchcontainer">
        <div className="staytitlecontainer"><h4>STAY IN TOUCH</h4></div>
        <div className="parastay"><h5>Sign up to THE ICONIC News for your $20 voucher.*</h5></div>
        <div className="inputstay">
            <input type="text" placeholder='Enter Your Email Adderess...'/>
            <button type='submit'>SUBMIT</button>
            </div>
            <div className="parastay2"><h5>* $20 voucher for new sign ups only.</h5></div>
    </div>
    </div>
   
   </div>
   </>
  )
}

export default Footer