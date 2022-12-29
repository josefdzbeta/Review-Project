import {useState, useEffect, createContext} from "react";
import clienteAxios from "../config/axios";
//CreateContext nos permite acceder al State de Forma Global

const AuthContext = createContext() //Hacemos referencia de cómo se va a llamar el context de este provider

const AuthProvider = ({children}) =>{

    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(()=>{
        const autenticarUsuario = async () =>{
            const token = localStorage.getItem('token')

            if (!token){
                setCargando(false)
                return
            }
            //Creamos el header de configuración 
            //Tenemos declarado que el request inicie como Bearer en express
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const {data} = await clienteAxios('/veterinarios/perfil', config)
                setAuth(data) //guardamos en el state global la información del usuario
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({})
            }
            setCargando(false)
        }
        autenticarUsuario()
    }, [])

    const cerrarSesion = () =>{
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil = async (datos) =>{
        const token = localStorage.getItem('token')

        if (!token){
            setCargando(false)
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/veterinarios/perfil/${datos._id}`
            const data = await clienteAxios.put(url, datos, config)

            return {
                msg: 'Almacenado Correctamente'
            }
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error: true
            }
        }
    }
    return (
        <AuthContext.Provider
        value={{
            auth,
            setAuth,
            cargando,
            cerrarSesion,
            actualizarPerfil
        }}> {/*le pasaremos un objeto con todos los valores disponibles cuando se llame a useAuth */}
            {children}
            {/* Authprovider contiene los datos */}
        </AuthContext.Provider>
    )
} //Sería como un componente grande que va a tener como hijo todos los componentes de la app

export {
    AuthProvider
}

export default AuthContext