import { useState, useEffect } from 'react';
import Input from './form';
import {v4 as uuidv4} from "uuid";
import "./App.css";
import { getItem } from './components/getItem';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Log from './components/Log';
import Tarea from './components/Tarea';


function App() {

  const [tarea, setTarea] = useState(() => getItem())

  const handleDelete = (id) => {

    const remainingTareas = tarea.filter (task => task.id !== id);
  
   setTarea ([...remainingTareas])
  
  }

  const handleStatusChange = (id) => {
  
    const modifiedTareas = tarea.map(task => 
  
      task.id === id ? {...task, isCompleted : !task.isCompleted} : task)
  
    setTarea ([...modifiedTareas])

  }
  
  useEffect (() => {

    window.localStorage.setItem ("todo-list", JSON.stringify(tarea))

 }, [tarea])

  

  const handleAdd = (e) => {
    
    e.preventDefault();
    if (e.target.input.value === "") return
    const newTarea = {
      id: uuidv4(),
      title: e.target.input.value,
      isCompleted : false
    }

    e.target.reset()

    setTarea ([
      ...tarea,
      newTarea
    ])

}

  return (
    
    <main className='container'>



<BrowserRouter>

<header>

  <nav>

    <Link to="/"  > HOME </Link>

    <Link to="/Log"> TAREAS REALIZADAS </Link> 

  </nav>

</header>

<Routes>

  <Route path='/' />

  <Route path='/Log' element={<Log completedTareas={tarea.filter(task => task.isCompleted)} />} /> 

</Routes>




      <h1>To Do List</h1>
      
      <Input onAdd = {(submit) => handleAdd(submit) } />

      

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>

          {tarea && tarea.map((tarea) => (

            <Tarea tarea={tarea} handleDelete={handleDelete} handleStatusChange={handleStatusChange} /> 

          )
          
          )}

        </tbody>

      </table>  

      </BrowserRouter>

      </main>
    
  )

}

export default App;
