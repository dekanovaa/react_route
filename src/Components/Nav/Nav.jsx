import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
 

  return (
     <div className="nav">
       <div className="container nav__container">
        <Link to="/" className="home__link">Lavash</Link>
        <Link to="/Desert" className="home__link">Desert</Link>
        <Link to="/Set" className="home__link">Set</Link>
        <Link to="/Xaggi" className="home__link" >Xaggi</Link>
        <Link to="/Burger" className="home__link">Burger</Link>
        <Link to="/Pizza" className="home__link">Pizza</Link>
        <Link to="/Set" className="home__link">Sendvich</Link>
        <Link to="/Lavash" className="home__link" >Donar</Link>
        <Link to="/Burger" className="home__link" >Xot-Dog</Link>
        <Link to="/Pizza" className="home__link" >Free</Link>
        <Link to="/Lavash" className="home__link" >Drink</Link>
        <Link to="/Xaggi" className="home__link" >Salad</Link>
        <Link to="/Burger" className="home__link">Bread</Link>
        <Link to="/Pizza" className="home__link" >Sauce</Link>
       </div>
    </div>

  )
}

export default Nav