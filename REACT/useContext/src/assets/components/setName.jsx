import { useContext, useState } from "react";
import { NameContext } from "../context/context";

const SetName = () => {

    const {updateName} = useContext(NameContext);
    const [newName, setNewName] = useState("");
    
    const handleAddName = (e) => {

        e.preventDefault();

        setNewName (e.target.value);
    }

    const handleSaveName = () => {

        updateName (newName);

    }

    return (

        <div>

            <input
             type="text"
             value={newName}
             onChange={handleAddName}
            />

            <button onClick={handleSaveName}>Guardar Nombre</button>
        </div>
    )
}

export default SetName;



