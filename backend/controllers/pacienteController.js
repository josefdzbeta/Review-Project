//Importar modelo
import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req, res) => {
  const paciente = new Paciente(req.body); //generar objeto de paciente con la info que le hemos pasado (post)
  paciente.veterinario = req.veterinario._id;
  try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPacientes = async (req, res) =>{
    const pacientes = await Paciente.find().where('veterinario').equals(req.veterinario);
    res.json(pacientes)
} 

const obtenerPaciente = async (req, res) =>{
  const {id} = req.params;
  const paciente = await Paciente.findById(id);

  /*console.log(paciente.veterinario._id)
  console.log(req.veterinario._id)

  tienen el mismo valor*/

  if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){ //Los convertimos a String para que no sean Objects Id
    return res.json({msg: 'Acción no válida'}) //Cuando se comparen los ids en mongodb. Es mejor convertirlos a String
  }
  if(paciente){
    res.json(paciente);
  }
}
const actualizarPaciente = async (req, res) =>{
  const {id} = req.params;
  const paciente = await Paciente.findById(id);

  if(paciente.veterinario._id.toString() !== req.veterinario._id.toString()){ //Los convertimos a String para que no sean Objects Id
    return res.json({msg: 'Acción no válida'}) //Cuando se comparen los ids en mongodb. Es mejor convertirlos a String
  }
  if(paciente){
    res.json(paciente);
  }
}
const eliminarPaciente = async (req, res) =>{

}


export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}