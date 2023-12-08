import { TbTrashOff } from "react-icons/tb";

export function Tarea ({ tarea }) {

    return (
        <tr key={tarea.id} className={tarea.isCompleted? "completed" : null}>

            <td>{tarea.id.substring(0,6)}</td>

            <td>{tarea.title}</td>

            <td  onClick = { () => handleStatusChange(tarea.id) }> {tarea.isCompleted ? "hecho" : "pending"}</td>
            
            <td> <TbTrashOff color='tomato' size={18} className='status' 
            
            onClick={ () => handleDelete(tarea.id) }/>
            
            </td>

          </tr>
    )
}