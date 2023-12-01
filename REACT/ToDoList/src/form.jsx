

function Formulario ({ onAddTask }) {

    return (
     <form onSubmit={onAddTask}>
        <label htmlFor="input"></label>
        <input type="text" id="input" name="input" />
        <input className="float-left" type="submit" value="crear" />
        <input className="float-right button-outline" type="reset" value="limpiar"  />
     </form>
    )
}

export default Formulario;