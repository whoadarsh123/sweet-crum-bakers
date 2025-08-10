import React from 'react'
import './Items.css'
import Oneitem from './Oneitem'

const Items = () => {
  return (
    <div className='main'>
       <div className='top-text'>Top Products</div>
      <div className="container">
       <Oneitem image="/images/cake.jpg"/> 
       <Oneitem image="/images/bread.jpg"/> 
       <Oneitem image="/images/buiskits.jpg"/> 
       <Oneitem image="/images/cokies.jpg"/> 
       <Oneitem image="/images/cokies2.jpg"/> 
       <Oneitem image="/images/patties.jpg"/> 
       <Oneitem image="/images/creamroll.jpg"/> 
      </div>
     
    </div>  
  )
}

export default Items
