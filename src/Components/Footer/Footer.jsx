import './Footer.css'
import yutub from './img_footer/yutub.webp'
import tg from './img_footer/tg.webp'
import insta from './img_footer/insta.webp'
import { Link } from 'react-router-dom'

function Footer() {
 

  return (
    <div className="footer">
        <div className="container footer__container">
            <div className="footer__top">
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link onClick={() => window.scrollTo({top:0})} to="/" className="footer__link-logo">SFood</Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="/" className="footer__link">Home</Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="/Branch" className="footer__link">Branches</Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="/About" className="footer__link">About Us</Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="/Contact" className="footer__link">Contact</Link>
                    </li>
                    <li className="footer__item">
                        <h1 className="footer__name">Join Us</h1>
                       <div className="footer__box">
                       <Link onClick={() => window.scrollTo({top:0})} to="/Contact" className="footer__sublink"><i class="fa-brands fa-telegram"></i></Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="https://www.instagram.com/maxwayuz/" className="footer__sublink"><i class="fa-brands fa-instagram"></i></Link>
                        <Link onClick={() => window.scrollTo({top:0})} to="https://www.youtube.com/@maxway2010" className="footer__sublink"><i class="fa-brands fa-youtube"></i></Link>
                       </div>
                    </li>
                    <li className="footer__item">
                        <h1 className="footer__name">Order by number</h1>
                        <a className="footer__link" href="tel:+998932202202">+998932202202</a>
                    </li>
                </ul>
                <hr/>
            </div>
            <div className="footer__bottom">
                <p className="footer__text">© 2020–2022, OOO "IT-TIME", official website</p>
                <a className="footer__link-tg" href="https://t.me/DekanovaSevinch">Developer by Dekanova Sevinch</a>
            </div>
        </div>
    </div>
  )
}

export default Footer