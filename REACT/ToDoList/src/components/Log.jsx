import React from 'react';

function Log({ completedTareas }) {

    return (
        <div>
            <h2>Tareas Realizadas</h2>
            <ul>
                {completedTareas.map((tarea) => (
                    <li key={tarea.id}>{tarea.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Log;