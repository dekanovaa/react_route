import './Burger.css'
import burger1 from './img_burger/burger1.jpg'
import burger2 from './img_burger/burger2.jpg'
import burger3 from './img_burger/burger3.jpg'
import burger4 from './img_burger/burger4.jpg'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Burger() {
 

  return (
    <div className="burger">
        <Navbar/>
        <Slider/>
        <Nav/>
        <div className="container burger__container">
            <ul className="burger__list">
                <li className="card__item">
                    <img className="card__img" src={burger1} alt="lavash"/>
                    <h2 className="card__name"> Seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">5.679 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={burger2} alt="lavash"/>
                    <h2 className="card__name">x owls available</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">6.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={burger3} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">12.8 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={burger4} alt="lavash"/>
                    <h2 className="card__name">Beef dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">3.9 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={burger3} alt="lavash"/>
                    <h2 className="card__name">Hot spicy fried rice with omelet</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={burger2} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">2.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
            </ul>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Burger