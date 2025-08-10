import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      
       <ul>
    <img className='menu' src="/images/menu.png" alt="" />
         <Link to="/" className="nav-text" style={{textDecoration : 'none' , color: 'inherit'}}>Home</Link>
         <Link to="/Products" className='nav-text' style={{textDecoration : 'none' , color: 'inherit'}}>Products</Link> 
         <li className='nav-text'>About</li>
         <li className='nav-text'>Contact</li>
        <div className='searchbar'>
         <input type="text" className='textbar' placeholder='Search....'    />
         <button className='btn'>
          <img src="/images/search-icons.png" alt="" style={{height:15}}/>
         </button>
        </div>
         
         
       </ul>
    </div>
  )
}

export default Navbar
