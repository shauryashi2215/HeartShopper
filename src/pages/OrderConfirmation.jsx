import PageTransition from '../features/PageTransitions'
import { Link } from 'react-router-dom'
import '../styles/OrderConfirmation.css'

function OrderConfirmation() {
  return (
    <PageTransition>
      <div className="confirmation-page">

        {/* Checkmark */}
        <div className="confirmation-icon">💍</div>

        {/* Title */}
        <h1 className="confirmation-title">Order Confirmed!</h1>

        {/* Delivery message */}
        <p className="confirmation-delivery">
          Your order is on its way...<br />
          Estimated Delivery: <span>Right Now </span>
        </p>

        {/* Personal message */}
        <div className="confirmation-message">
          <p>
            Thank you for not just purchasing the ring but to choose me too, this special moment brings us to a commitment of a lifetime.
          </p>
        </div>

        {/* Order details */}
        <div className="confirmation-details">
          <h3>Order Details</h3>
          <p>📦 Product: Heart String Ring</p>
          <p>Delivery by: Shaurya</p>
          <p>Price: Your Love</p>
        </div>

        {/* Back home */}
        <Link to="/" className="back-home-btn">Back to HeartShopper</Link>

      </div>
    </PageTransition>
  )
}

export default OrderConfirmation