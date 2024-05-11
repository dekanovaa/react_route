import './Loginform.css'
import { Link } from 'react-router-dom'

function Loginform() {

  return (
    <div className="login">
        <div className="container login__container">
            <Link to="/" className="closebtn">x</Link>
            <h1 className="login__tittle">Login</h1>
            <form id="loginform">
                <label>Enter your phone number</label><br/>
                <input type="tel" id="tel" placeholder="+998......" requ/><br/>
                <button className="loginbtn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Loginform