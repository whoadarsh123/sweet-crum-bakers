import { useState } from 'react'
import './Home.css'
 import Items from './Items'
import Slideshow from './Slideshow'
 import Card from './Card'

 
function Home()
{
    return(
        <div>
    <Items/>
    <div className='selling-items'>
      <Card  Image="/images/rakhi-cake.png" title="Cakes" content="Upto 50% Off"/>
      <Card  Image="/images/snacks.png"  title="Namkeen" content="Upto 50% Off"/>
      <Card  Image="/images/sweets.png" title="Sweets" content="Upto 50% Off"/>
      <Card  Image="/images/pastries.png" title="Pastries" content="Upto 50% Off"/>
      <Card  Image="/images/gifts.png" title="Gifts" content="Upto 50% Off"/>
      <Card Image="/images/snacks2.png" title="Snacks" content="Upto 50% Off"/> 
    </div>
    <Slideshow/>
    </div>
    )
}
export default Home