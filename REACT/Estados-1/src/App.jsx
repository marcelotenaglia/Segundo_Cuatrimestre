import { useState } from 'react';
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);

  const addOneHandler = () => {
    setCounter(counter + 1);
  }

  const subtractOneHandler = () => {
    setCounter (counter - 1);
  }

  return (
    <>
      <h1>This is an awesome counter</h1>
      <p>{counter}</p>
      <button onClick = {addOneHandler}> Add one </button>
      <button onClick = {subtractOneHandler}> Sub one </button>
    </>
    
  )

  

  
}

export default App
