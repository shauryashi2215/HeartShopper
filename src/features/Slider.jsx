import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Slider.css'
import products from '../data/products.js'

function Slider(){
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() =>{
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 8000)
    return () => clearInterval(timer);
  }, [])

  const nextSlide = () =>{
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }
  const prevSlide = () =>{
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const current = products[currentIndex]

  return(
    <div className="slider">

      {/*Main Slide*/}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="slide"
        >
          <p className="slide-emoji">{current.emoji}</p>
          <h2 className="slide-name">{current.name}</h2>
          <p className="slide-tagline">{current.tagline}</p>
          {current.link &&(
            <Link to={current.link} className="slide-btn">View Product</Link>
          )}
        </motion.div>
      </AnimatePresence>

      {/*Arrows*/}
      <button className="arrow left" onClick={prevSlide}>&#8592;</button>
      <button className="arrow right" onClick={nextSlide}>&#8594;</button>

      {/*Dots*/}
      <div className="dots">
        {products.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default Slider;