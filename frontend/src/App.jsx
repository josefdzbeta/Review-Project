import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ResetPassword from "./paginas/ResetPassword";
import NuevaPass from "./paginas/NuevaPass";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import AdministrarPacientes from "./paginas/AdministrarPacientes";
import CambiarPassword from "./paginas/CambiarPassword";
import EditarPerfil from "./paginas/EditarPerfil";

import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";
function App() {

//Route agrupa todos los componentes para que puedan pertenecer a un mismo layout
//Podemos crear varias agrupaciones
//Creamos grupo de rutas, indicamos el layout, y el index de esas rutas, por último, definir outlet en el layout
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            {/* Área pública */}
            <Route path="/" element={<AuthLayout/>}> //Cargar componente
              <Route index element={<Login />}/> {/* Index define lo que es el primer componente*/ }
              <Route path="registrar" element={<Registrar />}/> 
              <Route path="reset-password" element={<ResetPassword />}/> 
              <Route path="reset-password/:token" element={<NuevaPass />}/> 
              <Route path="confirmar/:id" element={<ConfirmarCuenta />}/> {/*:id ruta dinámica */}
            </Route> 
            {/* Área privada */}
            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />
            </Route>

          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
