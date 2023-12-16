import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Contacto from "./pages/contacto/Contacto"
import Servicios from "./pages/services/Servicios"
import Inicio from './Inicio'
import './App.css'

function App() {
  
  return (

    

      <BrowserRouter>

      <header class="header">

        <nav className="nav">

          <Link to="/" class="navEl"> Inicio </Link>

          <Link to="/Contacto" class="navEl"> Contacto </Link>

          <Link to="/Servicios" class="navEl"> Servicios </Link>

        </nav>

      </header>  

      

        <Routes>
         
          <Route path="/" element = {<Inicio />} />
          <Route path="/Contacto" element={ <Contacto/> }  />
          <Route path="/Servicios" element = {<Servicios/>} />
         
        </Routes>

      
        
      </BrowserRouter>

      

  )
}


export default App
