import Navbar from '../features/Navbar';
import PageTransition from '../features/PageTransitions';
import '../styles/About.css'
function About(){
    return(
        <PageTransition>
        <div>
            <Navbar />
            <div className="About-section">
                <h1 className="About-tittle">HeartShopper</h1>
                <div className="container">
                    <div className="container-content">
                        <p>HeartShopper was an idea of mine to shower you with the gifts of your choice.</p>
                        <p>I could have given you the ring but I wanted to make it special in a way that we wont forget this moment.</p>
                        <p>You can say its just a side project but uh i really poured my heart here and i just wanted you to know that you are soo lovely that i want to do every little silly thing I can to entertain you and to make a memory that would reside in your heart and our GIT forever.</p>
                        <p>I really really love you, keep on shopping, keep on loving me.</p>
                        <p className="lytext">I LOVE YOU!</p>
                    </div>
                </div>
            </div>
        </div>
        </PageTransition>
    )
}
export default About;