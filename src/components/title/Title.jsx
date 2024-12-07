import React from 'react'
import { Link } from 'react-router-dom'
import './Title.css'
const Title = () => {
  return (
    <>
    <div className="titlecontainer">
       <Link className='titlelink' to="/homepage"><h1>THE ICONIC</h1></Link> 
    </div>
    </>
  )
}

export default Title