import { useContext } from "react";
import { NameContext } from "../context/context";


const ReadName = () => {

    const {name} = useContext(NameContext);

return (

   <div> 
      <h2>Nombre Actual : {name} </h2>
   </div>

)

}

export default ReadName;
