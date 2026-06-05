import { Link } from 'react-router-dom';
import Navbar from '../features/Navbar';
import Slider from '../features/Slider'
import '../styles/Home.css'
import PageTransition from '../features/PageTransitions'
import products from '../data/products.js'
function Home(){
    return(
        <PageTransition>
        <div>
            <Navbar />
            <Slider />

            {/*Product Card Section*/}
            <div className="card-section">
  {products.map((product) => (
    <div key={product.id} className="ring">
      <Link to={product.link} className="card-item">
        <div className="card-img">{product.emoji}</div>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
      </Link>
    </div>
  ))}
</div>

            <div className="hero">
            <h1>Handcrafted with Love</h1>
            <h3>Heart Coded not Hard Coded</h3>
            </div>
        </div>
        </PageTransition>
    );
}

export default Home;