import { useState } from 'react';
import Formulario from './form';
import {uuid as uuidv4} from "uuid";
import "./App.css";

function App() {

  const [tarea, setTarea] = useState([])


  const handleAdd = (e) => {
    e.preventDefault();
    const newTarea = {
      id: uuidv4(),
      title: e.target.input.value,
      isCompleted : false
    }

    setTareas = ([
      ...tarea,
      newTarea
    ])
}

handleStatusChange = (id) => {
  const modifiedTareas = tarea.map(task => task.id === id ? {...todo, isCompleted : !task.isCompleted} : task)

  setTarea ([...modifiedTareas])
}

const handleDelete = (id) => {
  const remainingTareas = tarea.filter (task => task.id !== id);
  setTarea ([...remainingTareas])
}


  return (
    <>
    <div className='contenedorPrincipal'>

      <h1>To Do List</h1>
    
       
      <Formulario onAddTask = {(submit) => {
        handleAdd(submit.target.input.value)
      }} />
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
          {tarea.map((t) => (
          <tr className={tarea.isCompleted? "completed" : null} key={tarea.id}>
            <td>{tarea.id.substring(0,6)}</td>
            <td>{tarea.title}</td>
            <td className="status" onClick = {()=>{handleStatusChange(tarea.id)}}> {tarea.isCompleted ? "hecho" : "pending"}</td>
            <td><IoTrashOutline className="status" onClick={() => handleDelete()}/></td>
          </tr>))
          }
        </tbody>
      </table>
      </div>
      
    </>
  )
}

export default App
