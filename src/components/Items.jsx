import React from 'react'
import './Items.css'
import Oneitem from './Oneitem'

const Items = () => {
  return (
    <div className='main'>
       <div className='top-text'>Top Products</div>
      <div className="container">
       <Oneitem image="/sweet-crum-bakers/images/cake.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/bread.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/buiskits.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/cokies.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/cokies2.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/patties.jpg"/> 
       <Oneitem image="/sweet-crum-bakers/images/creamroll.jpg"/> 
      </div>
    </div>  
  )
}

export default Items
