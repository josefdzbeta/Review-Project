//Custom Hook
import {useContext} from "react"; //Con este context extraemos los datos
import PacientesContext from "../context/PacientesProvider";

const usePacientes = () =>{
    return useContext(PacientesContext) //Tenemos que indicarle el provider y con useContext extraemos los valores
}

export default usePacientes