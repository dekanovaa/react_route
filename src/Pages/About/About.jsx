
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'
import about from './img_about/about.png'
import Footer from '../../Components/Footer/Footer'

function About() {
 

  return (
      <>
      <Navbar/>
    <div className="about">
        <div className="container about__container">
            <img className="about__img" src={about} alt=""/>
            <h1 className="about__name">About Company</h1>
            <p className="about__text">For all your medium to high volume requirements, make Maxway your preferred supplier in China for Electronic Manufacturing Services.  
Established in 2004 and based in Bao’an, Shenzhen, and Zhongkai, Huizhou China, Maxway is a full service Electronics Manufacturing Service (EMS) provider. We offer complete end-to-end manufacturing solutions including material procurement, printed circuit board assembly (PCBA), box-build, high-level assembly, system level test, configure to order, and order fulfillment. As full member of IPC, Maxway specializes in high-quality product realization for clients all over the world including North and South America, Europe, Australia and Asia.</p>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About