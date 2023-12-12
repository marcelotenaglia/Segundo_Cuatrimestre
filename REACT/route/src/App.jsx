
import {BrowserRouter, Routes, Route, Link, Switch} from "react-router-dom"
import Contacto from "./pages/contacto/Contacto"
import Servicios from "./pages/services/Servicios"
import Inicio from './Inicio'





function App() {
  
  return (

      <BrowserRouter>

        <nav>

          <Link to="/"> Inicio </Link>

          <Link to="/contacto"> Contacto </Link>

          <Link to="/servicios"> Servicios </Link>

        </nav>

        <Routes>
         
          <Route path="/"> <Inicio/> </Route>
          <Route path="/contacto"> <Contacto/> </Route>
          <Route path="/servicios"> <Servicios/> </Route>
         
        </Routes>
        
      </BrowserRouter>

  )
}


export default App
