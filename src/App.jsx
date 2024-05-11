
import './App.css'
import Home from './Pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Lavash from './Components/Lavash/Lavash'
import Desert from './Components/Desert/Desert'
import Xaggi from './Components/Xaggi/Xaggi'
import Burger from './Components/Burger/Burger'
import Pizza from './Components/Pizza/Pizza'
import Set from './Components/Set/Set'
import Branch from './Pages/Branch/Branch'
import Magic from './Components/Magic/Magic'
import Tashkent from './Components/Tashkent/Tashkent'
import Chilanzar from './Components/Chilanzar/Chilanzar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Loginform from './Components/Loginform/Loginform'
import Shop from './Components/Shop/Shop'

function App() {


  return (
    <>
     <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/Branch" element={<Branch/>}/>
      <Route path="/" element={<Lavash/>}/>
      <Route path="/Lavash" element={<Lavash/>}/>
      <Route path="/Desert" element={<Desert/>}/>
      <Route path="/Set" element={<Set/>}/>
      <Route path="/Xaggi" element={<Xaggi/>}/>
      <Route path="/Burger" element={<Burger/>}/>
      <Route path="/Pizza" element={<Pizza/>}/>
      <Route path="/Magic" element={<Magic/>}/>
      <Route path="/Tashkent" element={<Tashkent/>}/>
      <Route path="/Chilanzar" element={<Chilanzar/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Loginform" element={<Loginform/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      
      
   </Routes>
  
    </>
  )
}

export default App
