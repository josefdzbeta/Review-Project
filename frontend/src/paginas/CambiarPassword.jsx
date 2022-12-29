import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";


const cambiarPassword = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10">Cambiar Contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu <span className="text-indigo-600 font-bold">contraseña</span></p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                
                {msg && <Alerta alerta={alerta}/>}

                <form onSubmit={handleSubmit}>

                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Nombre</label>
                        <input type="text" className="border bg-gray-50 w-full p-2 ,t-5 rounded-lg" name="nombre" value={perfil.nombre || ''} onChange={ e =>setPerfil({...perfil, [e.target.name] : e.target.value})} />
                    </div>
                    
                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Sito web</label>
                        <input type="text" className="border bg-gray-50 w-full p-2 ,t-5 rounded-lg" name="web" value={perfil.web || ''} onChange={ e =>setPerfil({...perfil, [e.target.name] : e.target.value})} />
                    </div>
                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Teléfono</label>
                        <input type="text" className="border bg-gray-50 w-full p-2 ,t-5 rounded-lg" name="telefono" value={perfil.telefono || ''} onChange={ e =>setPerfil({...perfil, [e.target.name] : e.target.value})}/>
                    </div>
                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Email</label>
                        <input type="text" className="border bg-gray-50 w-full p-2 ,t-5 rounded-lg" name="email" value={perfil.email || ''} onChange={ e =>setPerfil({...perfil, [e.target.name] : e.target.value})}/>
                    </div>
                    <input type="submit" value="Guardar Cambios" className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"/>
                </form>
            </div>
        </div>  
    </>
  )
}

export default cambiarPassword