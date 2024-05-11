import './Desert.css'
import cake from './img_desert/cake.jpg'
import sh from './img_desert/sh.jpg'
import sweet from './img_desert/sweet.jpg'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Desert() {
 

  return (
    <div className="desert">
        <Navbar/>
        <Slider/>
        <Nav/>
        <div className="container desert__container">
            <ul className="desert__list">
                <li className="card__item">
                    <img className="card__img" src={cake} alt="lavash"/>
                    <h2 className="card__name"> Dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">21.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={sh} alt="lavash"/>
                    <h2 className="card__name">Pongf owls available</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.89 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={sweet} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">13.89 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={sh} alt="lavash"/>
                    <h2 className="card__name">Beef dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.59 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={cake} alt="lavash"/>
                    <h2 className="card__name">Hot spicy fried rice with omelet</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={sh} alt="lavash"/>
                    <h2 className="card__name">Sehady seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.5 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
            
            </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Desert