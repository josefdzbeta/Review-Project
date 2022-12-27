import { Link } from "react-router-dom"
import { useState } from "react";
import axios from 'axios'
import Alerta from "../components/Alerta";
const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({ msg: 'Hay campos vacíos', error: true })
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({ msg: 'Las contraseñas no son iguales', error: true })
      return;
    }
    if (password.length < 6) {
      setAlerta({ msg: 'Introduce un mínimo de 6 caracteres', error: true })
      return;
    }
    setAlerta({}); //Vaciamos alerta si no hay errores

    //Crear usuario en la API
    try {
      const url = `http://localhost:4000/api/veterinarios`
      await axios.post(url, { nombre, email, password }) //Creamos objeto con los valores del formulario
      setAlerta({
        msg: 'Usuario creado correctamente, revisa tu email',
        error: false
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg, //Obtener acceso a los mensajes que hemos declarado en el backend
        error: true
      })
    }
  }
  //Cargar el componente de manera condicional
  const { msg } = alerta

  return (
    <>
      <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra <span className="text-black">tus Pacientes</span> </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
            <input type="text" placeholder="Tu Nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={nombre} onChange={e => setNombre(e.target.value)} />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input type="email" placeholder="Email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
            <input type="password" placeholder="Tu contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Repetir contraseña</label>
            <input type="password" placeholder="Repetir contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
          </div>
          <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto" />

        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link className="block text-center my-5 text-gray-500" to="/reset-password">Olvidé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Registrar