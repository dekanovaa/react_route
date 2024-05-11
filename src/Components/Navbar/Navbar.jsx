import './Navbar.css'
import shopbasket from './nav_img/shopbasket.png'
import burgerimg from './nav_img/burgerbtn.png'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    <div className="navbar">
        <div className="container navbar__container">
           <div className="navbar__left">
           <button className="burgerbtn"><img className="burger__img" src={burgerimg} alt=""/></button>
           <Link to="/" className="navbar__link-logo">SFood</Link>
            <nav className="navbar__nav">
                <Link to="/" className="navbar__link" href="#">Home</Link>
                <Link to="/Branch" className="navbar__link" href="#">Branches</Link>
                <Link to="/About" className="navbar__link" href="#">About Us</Link>
                <Link to="/Contact" className="navbar__link" href="#">Contact</Link>
            </nav>
           </div>
            <div className="navbar__right">
                <Link to="/Shop" className="shop__btn"><img className="navbar__shop-img" src={shopbasket} alt=""/></Link>
                <Link to="/Loginform" className="login__btn">Login</Link>
            </div>
        </div>
    </div>











  )
}

export default Navbar