import Navbar from '../features/Navbar'
import PageTransition from '../features/PageTransitions'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import '../styles/Cart.css'

function Cart() {
  const { cart, removeFromCart } = useCart()

  return (
    <PageTransition>
      <div>
        <Navbar />
        <div className="cart-page">
          <h1 className="cart-title">Your Cart 🛒</h1>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <p className="cart-empty-emoji">🛍️</p>
              <h3>Your cart is empty!</h3>
              <p>Looks like you haven't added anything yet...</p>
              <Link to="/" className="cart-shop-btn">Go Shop</Link>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-emoji">{item.emoji}</div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.tagline}</p>
                    <span className="cart-item-price">Price: {item.price} </span>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-summary">
                <h3>Order Summary</h3>
                <p>Items: {cart.length}</p>
                <p>Total: Priceless</p>
                <Link to="/order-confirmation" className="cart-checkout-btn">
                  Place Order
                </Link>
              </div>
            </>
          )}

        </div>
      </div>
    </PageTransition>
  )
}

export default Cart