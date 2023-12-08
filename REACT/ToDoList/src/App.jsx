import { useState, useEffect } from 'react';
import Input from './form';
import {v4 as uuidv4} from "uuid";
import "./App.css";
import { getItem } from './components/getItem';
import { Tarea } from './components/tarea';

function App() {
  
  const [tarea, setTarea] = useState(() => getItem())

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

 const handleStatusChange = (id) => {

  const modifiedTareas = tarea.map(task => 

    task.id === id ? {...task, isCompleted : !task.isCompleted} : task)

  setTarea ([...modifiedTareas])

}

  const handleDelete = (id) => {

   const remainingTareas = tarea.filter (task => task.id !== id);

  setTarea ([...remainingTareas])

}


  return (
    
      <main className='container'>
        <header>
          <h1>To Do List</h1>
        </header>
      
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

          {tarea && tarea.map((tarea, handleStatusChange, handleDelete) => (

            <Tarea tarea = {tarea} handleStatusChange = {handleStatusChange} handleDelete = {handleDelete}/>

          )
          
          )}

        </tbody>

      </table>

      </main>
      
    
  )
}

export default App
