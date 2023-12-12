import { useState, useEffect } from 'react';
import Input from './form';
import {v4 as uuidv4} from "uuid";
import "./App.css";
import { getItem } from './components/getItem';
import { TbTrashOff } from "react-icons/tb";




function App() {

  const handleDelete = (id) => {

    const remainingTareas = tarea.filter (task => task.id !== id);
  
   setTarea ([...remainingTareas])
  
  }
  
  const handleStatusChange = (id) => {
  
    const modifiedTareas = tarea.map(task => 
  
      task.id === id ? {...task, isCompleted : !task.isCompleted} : task)
  
    setTarea ([...modifiedTareas])
  
  }
  
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

          {tarea && tarea.map((tarea) => (

            <tr key={tarea.id} className={tarea.isCompleted ? "completed" : null}>
              <td> {tarea.id.substring (0,6) } </td>
              <td> {tarea.title} </td>
              <td className='status' onClick={() => handleStatusChange (tarea.id)}> {tarea.isCompleted ? "hecho" : "pendiente"} </td>
              <td><TbTrashOff color="tomato" size={18} className="status"
              onClick={() => handleDelete(tarea.id)}/>
              </td>
            </tr>

          )
          
          )}

        </tbody>

      </table>

      </main>
    
  )
}

export default App
