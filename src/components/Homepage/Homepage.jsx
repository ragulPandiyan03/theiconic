import React, { useEffect, useMemo } from 'react';
import Imagenav1 from '../../homepagecomponents/imagenav1/Imagenav1';
import Imagenav2 from '../../homepagecomponents/imagenav2/Imagenav2';
import Imagenav3 from '../../homepagecomponents/imagenav3/Imagenav3';
import Imagenav4 from '../../homepagecomponents/imagenav4/Imagenav4';
import Imagenav5 from '../../homepagecomponents/imagenav5/Imagenav5';
import Imagenav6 from '../../homepagecomponents/imagenav6/Imagenav6';
import Imagenav7 from '../../homepagecomponents/imagenav7/Imagenav7';
import Imagenav8 from '../../homepagecomponents/imagenav8/Imagenav8';
import { useSelector } from 'react-redux';
import {useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();
 const [status, setStatus] = useState(true)
  const data = useSelector(state => state.handleSearchItemFromReducer);
  // const [searchValue, setSearchValue] = useState("");
  console.log(data);
  
  useEffect(()=>{
    // setSearchValue(data);

if(data){
  setStatus(false);
}else{
  setStatus(true)
}
console.log("useEffect is Logged");

  },[data])

  return (
    <>
      {status &&  (
        <div className="homepagecontainer">
          <Imagenav1 />
          <Imagenav2 />
          <Imagenav3 />
          <Imagenav4 />
          <Imagenav5 />
          <Imagenav6 />
          <Imagenav7 />
          <Imagenav8 />
        </div>
      )}
    </>
  );
};

export default Homepage;
