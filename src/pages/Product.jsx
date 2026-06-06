import Navbar from '../features/Navbar';
import PageTransition from '../features/PageTransitions';
import '../styles/Product.css';
import { useCart } from '../Context/CartContext'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../data/products.js'
import Reviews from '../features/Reviews.jsx'

function Product() {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const { id } = useParams()

  const product = products.find((p) => p.id === parseInt(id))

  const handleAddToCart = () => {
    addToCart(product)
    navigate('/cart')
  }

  const handleOrderNow = () => {
    addToCart(product)
    navigate('/order-confirmation')
  }

  return (
    <PageTransition>
      <div>
        <Navbar />

        {/* Product Section */}
        <div className="product-section">

          {/* Left - Image */}
          <div className="product-image">
            <img src={product.image} alt={product.name} className="product-img" />
          </div>

          {/* Right - Details */}
          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>

          

            <p className="product-price">Price: {product.price}</p>

            <p className="product-description">{product.description}</p>

            <div className="product-buttons">
              <button onClick={handleAddToCart} className="add-cart-btn">Add to Cart</button>
              <button onClick={handleOrderNow} className="order-btn">Order Now</button>
            </div>
          </div>

        </div>

        {/* Description Section */}
        <div className="description-section">
          <h2>The Story Behind the Ring</h2>
          <p>{product.description}</p>
        </div>

        {/* Materials Section */}
        <div className="materials-section">
          <h2>Materials</h2>
          <ul>
            {product.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <Reviews productId={1} />
      </div>
    </PageTransition>
  )
}

export default Product