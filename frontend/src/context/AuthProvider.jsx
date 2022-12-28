import {useState, useEffect, createContext} from "react";
//CreateContext nos permite acceder al State de Forma Global

const AuthContext = createContext() //Hacemos referencia de cómo se va a llamar el context de este provider

const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState({})
    return (
        <AuthContext.Provider>
            {/* Authprovider contiene los datos */}
        </AuthContext.Provider>
    )
} //Sería un componente grande que va a tener como hijo todos los componentes de la app

export {
    AuthProvider
}

export default AuthContext