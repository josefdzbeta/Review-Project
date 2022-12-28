//Custom Hook
import {useContext} from "react"; //Con este context extraemos los datos
import AuthContext from "../context/AuthProvider";

const useAuth = () =>{
    return useContext(AuthContext) //Tenemos que indicarle el provider y con useContext extraemos los valores
}

export default useAuth