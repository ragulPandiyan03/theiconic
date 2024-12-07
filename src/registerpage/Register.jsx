import React from "react";
import "./Register.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Register = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [firstName,setFirstName]=useState(null);
  const [lastName,setLastName]=useState(null);
  const [dateOfBirth,setDateOfBirth]=useState(null);
  const [shoppingPreference,setShoppingPreference]=useState(null);
  console.log(email,password,firstName,lastName,dateOfBirth,shoppingPreference);

  const handleSubmit= async (event)=>{
    event.preventDefault();
const postData= await axios.post("https://6719fb1eacf9aa94f6a89b20.mockapi.io/datas/",{
  email:email,
  password:password,
  firstName:firstName,
  lastName:lastName,
  dateOfBirth:dateOfBirth,
  shoppingPreference:shoppingPreference,
})
navigate("/loginpage");
  }
  
  return (
    <>
      <div className="registercontainer">
        <div className="registercontent">
          <form action="" onSubmit={handleSubmit}>
          <div className="regsitercontaincontent">
            <p className="titlereg">New to THE ICONIC?</p>
            <p>
              Create an account to make purchases, create <br /> wishlists and
              follow your favourite brands!
            </p>
            <div className="emaildiv">
              <input className="reginput" type="email" placeholder="Email address" value={email} onChange={(event)=>setEmail(event.target.value)} required/>
            </div>
            <div className="passworddiv">
              <input className="reginput" type="password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} required/>
            </div>
            <div className="validatelist">
              <p>Your password needs:</p>
              <ul>
                <li>At least 8 characters</li>
                <li>At least 3 of the following:</li>
                <ul>
                  <li>Lower case letters (a-z)</li>
                  <li>Upper case letters (A-Z)</li>
                  <li>Numbers (0-9)</li>
                  <li>Special characters (e.g. !@#$%^&*)</li>
                  
                </ul>
              </ul>
            </div>
            <div className="firstnamediv">
              <input className="reginput" type="text" placeholder="First Name" value={firstName} onChange={(event)=>setFirstName(event.target.value)} required/>
            </div>
            <div className="lastnamediv">
              <input className="reginput" type="text" placeholder="Last Name" value={lastName} onChange={(event)=>setLastName(event.target.value)} required/>
            </div>
            <div className="dobdiv">
              <input className="reginput" type="date" value={dateOfBirth} onChange={(event)=>setDateOfBirth(event.target.value)} required/>
            </div>
            <div className="shoppingpreferencediv">
              <select className="reginput" onChange={(event)=>setShoppingPreference(event.target.value)} name="" id="" required>
                <option value="Mens Wear">Mens Wear</option>
                <option  value="WomensWear">Womens Wear</option>
              </select>
            </div>
            <div className="checkboxdiv">
              <input type="checkbox" required/>
              <p>Sign up for THE ICONIC news and get a $20 <br /> voucher for your next purchase. You'll receive <br />sales alerts, exclusive offers and the latest on <br />
              styles & trends</p>
            </div>
            <div className="createaccountbuttondiv">
              <button type="submit" className="createaccountbtn"> CREATE ACCOUNT</button>
            </div>
            <div className="alreadydiv">
              <p>Already have an account? <span><Link to={"/loginpage"}>Log in</Link></span> </p>
            </div>
            <div className="lastdiv">
              <p>By creating an account and/or signing up for our <br /> newsletter, you agree to THE ICONIC's Terms and <br /> Conditions and Privacy Policy</p>
            </div>
          </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Register;
