import PageTransition from '../features/PageTransitions'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/OrderConfirmation.css'

function OrderConfirmation() {

  useEffect(() => {
    emailjs.send(
      'service_y2tqrlf',
      'template_r3gvvco',
      {
        to_name: 'Yashi',
        email: 'beastygamer988@gmail.com',
        product_name: 'Heart String Ring',
        delivery_by: 'Shaurya',
        price: 'Your Love',
      },
      '-HAFALzrftSwYyown'
    )
  }, [])

  return (
    <PageTransition>
      <div className="confirmation-page">

        <div className="confirmation-icon">💍</div>
        <h1 className="confirmation-title">Order Confirmed!</h1>

        <p className="confirmation-delivery">
          Your order is on its way...<br />
          Estimated Delivery: <span>As soon as i see you!</span>
        </p>

        <div className="confirmation-message">
          <p>
            Thank you for not just purchasing the ring but to choose me too,
            this special moment brings us to a commitment of a lifetime!
          </p>
        </div>

        <div className="confirmation-details">
          <h3>Order Details</h3>
          <p>Product: Heart String Ring</p>
          <p>Delivery by: Shaurya</p>
          <p>Price: Your Love</p>
        </div>

        <Link to="/" className="back-home-btn">Back to HeartShopper</Link>

      </div>
    </PageTransition>
  )
}

export default OrderConfirmation