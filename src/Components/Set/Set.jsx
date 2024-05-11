
import './Set.css'
import set1 from './img_set/set1.png'
import set2 from './img_set/set2.jpg'
import set3 from './img_set/set3.jpg'
import set4 from './img_set/set4.jpg'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Set() {
 

  return (
    <div className="set">
        <Navbar/>
        <Slider/>
        <Nav/>
        <div className="container set__container">
        <ul className="set__list">
                <li className="card__item">
                    <img className="card__img" src={set1} alt="lavash"/>
                    <h2 className="card__name">Set seasoned seafood </h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">5.79 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set2} alt="lavash"/>
                    <h2 className="card__name">x owls available</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">8.6 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set3} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">8.4 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set4} alt="lavash"/>
                    <h2 className="card__name">Beef dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">12.9 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set3} alt="lavash"/>
                    <h2 className="card__name">Hot spicy fried rice with omelet</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set2} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">2.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set1} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.49 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set2} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={set1} alt="lavash"/>
                    <h2 className="card__name">Salted Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">20.00 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
            </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Set