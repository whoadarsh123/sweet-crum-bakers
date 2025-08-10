import React from 'react'
import './Card.css'
const  Card = ({title, content,Image}) => {
  return (
    <div className='Card'>
      <div className='Card-text'>
       <h2 className='title'>{title}</h2>
       <p className='content'>{content}</p>
      </div>
      <img src= {Image} alt="Card-image" className='Card-image' />
    </div>
  )
}

export default Card
