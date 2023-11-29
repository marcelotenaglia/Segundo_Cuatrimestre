import './App.css'

/*maximo de litros 40.
mayor que 30. fondo verde
entre 20 y 30, fondo amarillo
entre 10 y 20 fondo naranja
entre 0 hasta 10 fondo rojo*/ 

function App() {
  
  const CantidadNafta = Math.floor((Math.random() * 40) + 1)

  let color; 

  if (CantidadNafta > 31) {
    color = `#008000`
  } else if (CantidadNafta > 20 && CantidadNafta <= 30) {
    color = `#FFFF00`
  } else if (CantidadNafta > 10 && CantidadNafta <= 20) {
    color = `#FF8000`
  } else if (CantidadNafta <= 10) {
    color = `#FF0000`
  }

  return (
    <>
      <div className = "total">

        <h2>Tanque de Nafta</h2>

        <p> Cantidad de Nafta : {CantidadNafta} </p>

        <div className='marcador' style = {{backgroundColor : color}}>Marcador</div>

      </div>
    </>
  )
}

export default App
