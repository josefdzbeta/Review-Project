import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    //Fragment
    <> 
        <h1>Desde AuthLayout</h1>

        <Outlet />{/*outlet inyecta el código de otros componentes en la página definida como máster*/ }
    </>
  )
}

export default AuthLayout