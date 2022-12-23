import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
function App() {
//Route agrupa todos los componentes que pertenezcan a AuthLayout
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}> //Cargar componente
          <Route index element={<Login />}/> {/* Index define lo que es el primer componente*/ }
          
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
