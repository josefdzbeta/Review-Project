import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ResetPassword from "./paginas/ResetPassword";
import NuevaPass from "./paginas/NuevaPass";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import { AuthProvider } from "./context/AuthProvider";
function App() {
//Route agrupa todos los componentes que pertenezcan a AuthLayout

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}> //Cargar componente
            <Route index element={<Login />}/> {/* Index define lo que es el primer componente*/ }
            <Route path="registrar" element={<Registrar />}/> 
            <Route path="reset-password" element={<ResetPassword />}/> 
            <Route path="reset-password/:token" element={<NuevaPass />}/> 
            <Route path="confirmar/:id" element={<ConfirmarCuenta />}/> {/*:id ruta dinámica */}
          </Route> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
