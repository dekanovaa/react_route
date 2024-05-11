import './Xaggi.css'
import xaggi1 from './img_xaggi/xaggi1.jpg'
import xaggi2 from './img_xaggi/xaggi2.jpg'
import xaggi3 from './img_xaggi/xaggi3.jpg'
import xaggi4 from './img_xaggi/xaggi4.jpg'
import Nav from '../Nav/Nav'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Xaggi() {
 

  return (
    <div className="xaggi">
        <Navbar/>
        <Slider/>
        <Nav/>
        <div className="container xaggi__container">
            <ul className="xaggi__list">
                <li className="card__item">
                    <img className="card__img" src={xaggi1} alt="lavash"/>
                    <h2 className="card__name">Xaggi Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">12.2 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={xaggi2} alt="lavash"/>
                    <h2 className="card__name">Taew owls available</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.49 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={xaggi3} alt="lavash"/>
                    <h2 className="card__name">Xaggi Pasta with mushroom sauce</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">7.89 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={xaggi4} alt="lavash"/>
                    <h2 className="card__name">Beef dumpling in hot soup</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">3.87 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={xaggi1} alt="lavash"/>
                    <h2 className="card__name">Hot spicy fried rice with omelet</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">9.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
                <li className="card__item">
                    <img className="card__img" src={xaggi3} alt="lavash"/>
                    <h2 className="card__name">Spicy seasoned seafood noodles</h2>
                    <p className="card__text">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                    <div className="card__box">
                        <p className="card__subtext">4.29 сум</p>
                        <button className="card__btn">Order</button>
                    </div>
                </li>
               
            </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Xaggi