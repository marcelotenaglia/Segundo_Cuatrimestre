import React from 'react';
import { TbTrashOff } from "react-icons/tb";

function Tarea ({ tarea, handleStatusChange, handleDelete }) {
    return (

        

             <tr key={tarea.id} className={tarea.isCompleted ? "completed" : null}>
              <td> {tarea.id.substring (0,6) } </td>
              <td> {tarea.title} </td>
              <td className='status' onClick={() => handleStatusChange (tarea.id)}> {tarea.isCompleted ? "hecho" : "pendiente"} </td>
              <td><TbTrashOff color="tomato" size={18} className="status"
              onClick={() => handleDelete(tarea.id)}/> 
              </td>  
            </tr> 

            
        
    );
}

export default Tarea ;