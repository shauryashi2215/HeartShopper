import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Confirmation from './pages/OrderConfirmation'
import Cart from './pages/Cart'
import About from './pages/About'
import {useEffect, useState} from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './Context/CartContext'

function App(){
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    }, 4000)
  }, [])
  if (loading){
    return(
      <div className="Splash">
        <div className="Splash-logo"></div>
        <h1 className="Splash-title">HeartShopper</h1>
        <p className="Splash-sub">Made with all the love i have for you!</p>
      </div>
    )
  }
 return (
  <CartProvider>
    <BrowserRouter>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/order-confirmation" element={<Confirmation />}/>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </CartProvider>
)
}

export default App