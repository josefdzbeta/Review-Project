import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ResetPassword from "./paginas/ResetPassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";

function App() {
//Route agrupa todos los componentes que pertenezcan a AuthLayout

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}> //Cargar componente
          <Route index element={<Login />}/> {/* Index define lo que es el primer componente*/ }
          <Route path="registrar" element={<Registrar />}/> 
          <Route path="reset-password" element={<ResetPassword />}/> 
          <Route path="confirmar/:id" element={<ConfirmarCuenta />}/> {/*:id ruta dinámica */}
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
