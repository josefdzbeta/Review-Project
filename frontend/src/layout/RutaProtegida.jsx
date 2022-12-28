import { Outlet,Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RutaProtegida = () => {
    const {auth, cargando} = useAuth() //Extraemos toda la información del context
    console.log(auth);
    console.log(cargando);

    if(cargando) return 'cargando'
  return (
    <>
        
        <Header />
          {auth?._id ? (<main className="container mx-auto mt-20"><Outlet /></main> ): <Navigate to="/" />} {/*Si auth tiene el token de usuario, muestra el outlet(el contenido de cada página), sino, redirigir usuario a inicio de sesión*/}
        <Footer />
    </>
  )
}

export default RutaProtegida