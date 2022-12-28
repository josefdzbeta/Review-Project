import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";

const ListadoPacientes = () => {

  const {pacientes} = usePacientes();
  
  return (
    <>
      {pacientes.length ? (
        <> 
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">pacientes y citas</span></p>

          {pacientes.map(paciente =>{
            <Paciente 
              key={paciente._id}
              paciente={paciente}
            />
            // Pasamos paciente al prop
          })}
        </>
      ) : (
      
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">Añade pacientes y <span className="text-indigo-600 font-bold">aparecerán aquí</span></p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes