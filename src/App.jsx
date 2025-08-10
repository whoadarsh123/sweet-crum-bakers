import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'

 

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
     </Routes>
    </>
  )
}

export default App
