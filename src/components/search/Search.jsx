import React from 'react'
import './Search.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleSearchItem } from '../../action/Action';
import { useSelector } from 'react-redux';
// import { handleSearchItemFromReducer } from '../../reducer/Reducer';
import { handleSearchItemFromReducer } from '../../reducer/Reducer';
const Search = () => {
  const data = useSelector(state => state.handleSearchItemFromReducer)
  const dispatch = useDispatch();
  const [getInput,setInput] = useState("");
  useEffect(()=>{

console.log(data);

  },[getInput])
  const handleSearchValue=(event)=>{
    setInput(event.target.value);
    
  }
  dispatch(handleSearchItem(getInput));
  
  return (
   <>
   <div className="searchcontainer">
<input type="text" placeholder='Search for products, brands, or...' value={getInput} onChange={handleSearchValue} />
   </div>
   </>
  )
}

export default Search