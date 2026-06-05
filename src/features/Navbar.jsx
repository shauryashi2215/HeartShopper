import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav className="Nav">
            <div className="Nav-brand">HeartString</div>
            <ul className="Nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;