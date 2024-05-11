
import './Branch.css'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Branch() {
 

  return (
      <>
      <Navbar/>
    <div className="branch">
        <div className="container branch__container">
            <ul className="branch__list">
                <Link to="/Magic"><li className="branch__item">
                    <div className="branch__box">
                        <h1 className="branch__name">MaxWay Magic City</h1>
                        <p className="branch__text">Magic City, st Bobur,174,Tashkent,Uzbekistan</p>
                    </div>
                    <div className="branch__box">
                        <p className="branch__subtext">Time</p>
                        <p className="branch__text">10:00-03:00</p>
                    </div>
                    </li></Link>
                    <Link to="/Tashkent"><li className="branch__item">
                    <div className="branch__box">
                        <h1 className="branch__name">MaxWay Tashkent City</h1>
                        <p className="branch__text">Tshkent City, st Bobur,74,Tashkent,Uzbekistan</p>
                    </div>
                    <div className="branch__box">
                        <p className="branch__subtext">Time</p>
                        <p className="branch__text">10:00-03:00</p>
                    </div>
                    </li></Link>
                    <Link to="/Chilanzar"><li className="branch__item">
                    <div className="branch__box">
                        <h1 className="branch__name">MaxWay Chilonzor City</h1>
                        <p className="branch__text">Chilonzor City, st Chilonzor,17,Tashkent,Uzbekistan</p>
                    </div>
                    <div className="branch__box">
                        <p className="branch__subtext">Time</p>
                        <p className="branch__text">10:00-03:00</p>
                    </div>
                    </li></Link>
            </ul>
        </div>    
    </div>
    <Footer/>
    </>
  )
}

export default Branch