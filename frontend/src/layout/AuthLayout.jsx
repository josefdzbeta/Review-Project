import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    //Fragment
    <> 
        <main className="container mx-auto md:grid grid grid-cols-2 mt-12 gap-10 p-5 items-center">
            <Outlet />{/*outlet inyecta el código de otros componentes en la página definida como máster*/ }
        </main>
    </>
  )
}

export default AuthLayout