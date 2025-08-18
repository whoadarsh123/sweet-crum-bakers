import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
    <div className='navbar'>
      <ul>
        <img className='menu' src="/images/menu.png" alt="Menu" onClick={() => setisOpen(true)} />
        <Link to="/" className="nav-text" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        <Link to="/Products" className='nav-text' style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link>
        <li className='nav-text'>About</li>
        <li className='nav-text'>Contact</li>
        <div className='searchbar'>
          <input type="text" className='textbar' placeholder='Search....' />
          <button className='btn'>
            <img src="/images/search-icons.png" alt="" style={{ height: 15 }} />
          </button>
        </div>
      </ul>
    </div>
    <div className={`slide-page ${isOpen ? 'open' : ""}`}>
    <img src="/images/close.png" alt="back" style={{backgroundColor: "white", height:30, }} onClick={() => setisOpen(false)} />
    <ul className='slide-page-text'>
      <Link to='/' style={{textDecoration: 'none', color: "white"}}>Home</Link>
      <Link to="/Products" style={{textDecoration:'none',color: "white"}}>Products</Link>
      <li style={{color: "white"}} >About</li>
      <li style={{color: "white"}}>Contact</li>
    </ul>
    <h2></h2>
    </div>
    </>
  )
}

export default Navbar
