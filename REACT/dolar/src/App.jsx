import { useState } from 'react'
import './App.css'

function App() {

 /* const [celcius, setCelcius] = useState(0)

  const [fahrenheit, setFahrenheit] = useState("")

  const celAFar = () => {

    const farResult = (celcius * (9/5)) + 32;

    setFahrenheit (farResult.toFixed(2));

  }

  return (
    <>
      <h1>CONVERSOR CELCIUS A FAHRENHEIT</h1>
      
      <label>

        Celcius:  

         <input 
          type="text"
          value = {celcius}
          onChange={(e) => {

            setCelcius(e.target.value);

          }}

         />

      </label>=

      <button onClick={celAFar}>Convertir</button>

      <p>Resultado: {fahrenheit} Fahrenheit</p>
    </>
  )*/


  const [ancho, setAncho] = useState (0);

  const [alto, setAlto] = useState (0);

  const [area, setArea] = useState (0);

  const calcularArea = () => {
 
    const areaTotal = (ancho*alto);

    setArea (areaTotal);

  }

  return (

    <>

    <h1>AREA DEL RECTANGULO</h1>

    <label>

        Base:  

         <input 
          type="number"
          value = {ancho}
          onChange={(e) => {

            setAncho(e.target.value);

          }}

         />

      </label>=

      <label>

        Altura:  

         <input 
          type="number"
          value = {alto}
          onChange={(e) => {

            setAlto(e.target.value);

          }}

         />

      </label>=

      <button onClick={calcularArea}>Calcular</button>

      <p>Resultado: {area} cm cuadrados</p>

    </>
  )

/*(base*altura)/2*/ 
}

export default App
