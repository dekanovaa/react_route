
import './Magic.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import lac from './img_magic/lac.png'
import phone from './img_magic/phone.png'
import hour from './img_magic/hour.png'
import tg from './img_magic/tg.svg'
import magic from './img_magic/magic.webp'

function Magic() {
 

  return (
      <>
      <Navbar/>
    <div className="magic">
        <div className="container magic__container">
            <div className="magic__left">
                <h1 className="magic__name">MaxWay Magic City</h1>
                <span>
                    <img className="magic__img" src={lac} alt="locatsiya"/>
                    <p className="magic__text">Address:Magic City,st Babura, 174, Tashkent, Uzbekistan</p>
                </span>
                <span>
                    <img className="magic__img" src={hour} alt="hour"/>
                    <p className="magic__text">Opening hours: 10:00-03:00</p>
                </span>
                <span>
                    <img className="magic__img" src={phone} alt="phone"/>
                    <p className="magic__text">Phone number: +998 93 148 77 33</p>
                </span>
                <span>
                    <img className="magic__img" src={tg} alt="tg"/>
                    <p className="magic__text">Landmark:Magic City</p>
                </span>
                <img className="magic__pic" src={magic} alt="magic"/>
            </div>
            <div className="magic__right">
            <iframe className="map" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1" allowfullscreen="true"></iframe>
            </div>
        </div>    
    </div>
    <Footer/>
    </>
  )
}

export default Magic