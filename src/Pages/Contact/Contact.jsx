import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


function Contact() {
 

  return (
      <>
      <Navbar/>
      <div className="contact">
          <div className="container contact__container">
              <ul className="contact__list">
                  <li className="contact__item">
                      <h1 className="contact__name">Contact center number</h1>
                      <div className="contact__box">
                          <p className="contact__text">Tashkent</p>
                          <p className="contact__text">+998931487733</p>
                      </div>
                      <hr/>
                      <div className="contact__box">
                          <p className="contact__text">Namangan</p>
                          <p className="contact__text">+99893167666</p>
                      </div>
                      <hr/>
                      <div className="contact__box">
                          <p className="contact__text">Angren</p>
                          <p className="contact__text">+998932202202</p>
                      </div>
                      <hr/>
                  </li>
                  <li className="contact__item">
                      <h1 className="contact__name">Customer support department</h1>
                      <div className="contact__box">
                          <p className="contact__text">Email</p>
                          <a href="mailto:dekanovasevinchhh@gmail.com">dekanovasevinchhh@gmail.com</a>
                      </div>
                      <hr/>
                      <div className="contact__box">
                          <p className="contact__text">Contact number</p>
                         <a href="tel:+998932202202">+998932202202</a>
                      </div>
                      <hr/>
                  </li>
                  <li className="contact__item">
                      <h1 className="contact__name">Copyright holders</h1>
                      <p className="contact__text">For questions arising in connection with the alleged misuse of trademarks, logos and other materials, please contact us by e-mail with supporting documents attached.</p>
                      <div className="contact__box">
                          <p className="contact__text">Email</p>
                          <p className="contact__text">dekanovasevinchhh@gamil.com</p>
                      </div>
                      <hr/>
                  </li>
              </ul>
          </div>
      </div>
      <Footer/>

    
    </>
  )
}

export default Contact