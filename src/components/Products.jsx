import './Products.css'
 import Card from './Card'
import { useState } from 'react'
function Products()
{
     const[selectQuery ,setselectQuery ] = useState("cake");
    return(
         
        <div className='Product-page'>
        
        <div className="Products-list">
         <ul className='Items'>
            <li>Cakes</li>
            <li>Gift-Hampers</li>
            <li>Bread</li>
            <li>Cookies</li>
            <li>Snacks</li>
         </ul>
        </div>
        <div className='Products'>
         <Card/> 
         <Card/> 
         <Card/> 
        </div>
        </div>
    )
}
export default Products