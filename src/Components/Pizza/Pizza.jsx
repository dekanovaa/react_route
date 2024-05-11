import './Pizza.css'
import pizza1 from './img_pizza/pizza1.jpg'
import pizza2 from './img_pizza/pizza2.jpg'
import pizza3 from './img_pizza/pizza3.jpg'
import pizza4 from './img_pizza/pizza4.jpg'
import pizza5 from './img_pizza/pizza5.jpg'
import pizza6 from './img_pizza/pizza6.jpg'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Pizza() {
 

  return (
    <div className="pizza">
        <Navbar/>
        <Slider/>
        <Nav/>
        <div className="container pizza__container">
            <ul className="pizza__list">
                <li className="card__item">
                    <img className="card__img" src={pizza1} alt="lavash"/>
                    <h2 className="card__name">Pizza seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">8.5 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza2} alt="lavash"/>
                    <h2 className="card__name">Lahdg owls available</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza3} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.9 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza4} alt="lavash"/>
                    <h2 className="card__name">Beef dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">10 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza5} alt="lavash"/>
                    <h2 className="card__name">Hot spicy fried rice with omelet</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza6} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza2} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.8 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza4} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.5 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={pizza1} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.55 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
            </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Pizza