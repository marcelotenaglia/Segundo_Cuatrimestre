import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "chavalete"

  const colors = [{id:1, name:"orange"}, {id:2, name:"blue"}, {id:3, name:"red"}, {id:4, name:"yellow"}, {id:5, name:"pink"},]

  return (

   <>

     <h1>Hello World</h1>

     <p>Hola {name}</p>

     <ol>
    {colors.map ((c) => <li key = {c.id} > {c.name} </li>)}
     </ol>

   </>

  )
  
}

export default App
