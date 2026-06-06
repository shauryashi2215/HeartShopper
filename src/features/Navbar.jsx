import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Navbar() {
  const { user, login, logout } = useAuth()

  return (
    <nav className="Nav">
      <div className="Nav-brand">HeartShopper</div>
      <ul className="Nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
        <li><Link to="/about">About</Link></li>
        {user ? (
          <li className="Nav-user">
            <img src={user.photoURL} alt={user.displayName} className="Nav-avatar" />
            <span>{user.displayName}</span>
            <button onClick={logout} className="Nav-logout">Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={login} className="Nav-login">Login with Google</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar