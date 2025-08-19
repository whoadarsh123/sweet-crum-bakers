 
import {  HashRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'

 

function App() {
  

  return (
    <>
     <Navbar/>
     <HashRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
     </Routes>
     </HashRouter>
    </>
  )
}

export default App
