import { Link } from "react-router-dom"
import { useState } from "react";
const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  return (
    <>
      <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y Administra <span className="text-black">tus Pacientes</span> </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form >
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
            <input type="text" placeholder="Tu Nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={nombre} onChange={ e => setNombre(e.target.value)}/>
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input type="email" placeholder="Email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={ e => setEmail(e.target.value)}/>
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
            <input type="password" placeholder="Tu contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={ e => setPassword(e.target.value)} />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">Repetir contraseña</label>
            <input type="password" placeholder="Repetir contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"  value={repetirPassword} onChange={ e => setRepetirPassword(e.target.value)}/>
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