import { Outlet,Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RutaProtegida = () => {
    const {auth, cargando} = useAuth() //Extraemos toda la información del context
    console.log(auth);
    console.log(cargando);

    if(cargando) return 'cargando'
  return (
    <>
        <h1>it works</h1>
        
        {auth?._id ? <Outlet /> : <Navigate to="/" />} {/*Si auth tiene el token de usuario, muestra el outlet(el contenido de cada página), sino, redirigir usuario a inicio de sesión*/}
    </>
  )
}

export default RutaProtegida