import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [apiData, setApiData] = useState([]); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  useEffect(() => {
  
    fetchData();
  }, []); 

  const fetchData = async () => {
   try {
     const response = await axios.get("https://6719fb1eacf9aa94f6a89b20.mockapi.io/datas");
     setApiData(response.data); 
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };
  
  const handleValidate = (event) => {
    event.preventDefault(); 
    const isValidUser = apiData.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password.");
    }
  };

  return (
    <>
      <div className="headerlogincontainer">
        <div className="headerlogincontent">
          <form onSubmit={handleValidate}>
            <div className="logincontent">
              <div className="c1">
                <p className="c1p1">Already have an account?</p>
                <p className="c1p2">
                  Login to purchase products, add to your wishlist, and follow
                  your favourite brands!
                </p>
              </div>
              <div className="emailinput">
                <input
                  className="input"
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address*"
                  required
                />
              </div>
              <div className="passwordinput">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password*"
                  required
                />
              </div>
              <div className="forgotpassword">
                <p>Forgot password?</p>
              </div>
              <div className="loginbutton">
                <button className="loginbtn" type="submit">
                  Log in
                </button>
              </div>
              <div className="c2">
                <p>
                  New to THE ICONIC?{" "}
                  <span>
                    <Link to={"/register"}>Create an account</Link>
                  </span>
                </p>
              </div>
              <div className="c3">
                <p>
                  By logging in, you agree to THE ICONIC Terms and <br />{" "}
                  Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
