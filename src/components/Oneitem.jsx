import React, { useState } from 'react'
import './Oneitem.css'

const Oneitem = ({image}) => {
  return (
     <div>
      <img src={image} alt="item" className='Item'/>
    </div>
     
  )
}

export default Oneitem
