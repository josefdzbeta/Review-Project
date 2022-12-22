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



const obtenerPaciente = (req, res) =>{

} 


export {
    agregarPaciente,
    obtenerPaciente
}