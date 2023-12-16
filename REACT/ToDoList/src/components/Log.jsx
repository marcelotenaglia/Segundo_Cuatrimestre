import React from 'react';

const completedTask = (id) => {

    const completedTasks = tarea.map(todo => 
        
        todo.id === id ? {...todo.push(), isCompleted : !todo.isCompleted} : todo)

        setTodo ([...completedTasks])

}

function Log() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tareas Realizadas: </th>
                </tr>
            </thead>

            
            
        </table>
    );
}

export default Log;