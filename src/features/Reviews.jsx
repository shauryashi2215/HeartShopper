import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { useAuth } from '../Context/AuthContext'
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore'
import '../styles/Reviews.css'

function Reviews({ productId }) {
  const { user } = useAuth()
  const [reviews, setReviews] = useState([])
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(5)

  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      where('productId', '==', productId),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setReviews(data)
    })

    return () => unsubscribe()
  }, [productId])

  const handleSubmit = async () => {
    if (!reviewText.trim()) return

    await addDoc(collection(db, 'reviews'), {
      productId,
      text: reviewText,
      rating,
      userName: user.displayName,
      userPhoto: user.photoURL,
      createdAt: serverTimestamp()
    })

    setReviewText('')
    setRating(5)
  }

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>

      {/* Write a review — only if logged in */}
      {user ? (
        <div className="review-form">
          <div className="review-form-user">
            <img src={user.photoURL} alt={user.displayName} className="review-avatar" />
            <span>{user.displayName}</span>
          </div>

          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={star <= rating ? 'star active' : 'star'}
              >
                ⭐
              </span>
            ))}
          </div>

          <textarea
            className="review-input"
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <button onClick={handleSubmit} className="review-submit">
            Submit Review 💜
          </button>
        </div>
      ) : (
        <p className="review-login-msg">Login to leave a review 💜</p>
      )}

      {/* Display reviews */}
      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p className="reviews-placeholder">No reviews yet... be the first! 💜</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <img src={review.userPhoto} alt={review.userName} className="review-avatar" />
                <span className="review-username">{review.userName}</span>
                <span className="review-rating">{'⭐'.repeat(review.rating)}</span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Reviews