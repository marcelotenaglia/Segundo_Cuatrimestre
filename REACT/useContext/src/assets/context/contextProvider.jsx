import { useState } from "react";
import NameContext from "./context";

const NameContextProvider = ({children}) => {

    console.log ("Renderin context provider")

    const [name, setName] = useState ("");

    const updateName = (newName) => {
        setName (newName);
    }

    return (

        <NameContext.Provider value={{name, updateName}}>
            {children}
        </NameContext.Provider>

    )
}

export default NameContextProvider;