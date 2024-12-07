import React from 'react'
import './Men.css'
import Menimagenav1 from '../../../menscomponents/menimmagenav1/Menimagenav1'
import Menimagenav2 from '../../../menscomponents/menimagenav2/Menimagenav2'
import Menimagenav3 from '../../../menscomponents/menimagenav3/Menimagenav3'
import Menimagenav4 from '../../../menscomponents/menimagenav4/Menimagenav4'
import Menimagenav5 from '../../../menscomponents/menimagenav5/Menimagenav5'
const Men = () => {
  return (
  <>
  <div className="mencontainer">
    <Menimagenav1/>
    <Menimagenav2/>
    <Menimagenav3/>
    <Menimagenav4/>
    <Menimagenav5/>
  </div>
  </>
  )
}

export default Men