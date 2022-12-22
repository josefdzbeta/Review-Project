import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({
   nombre: {
    type: String,
    required: true
   }, 
   propietario: {
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true
   },
   fechaAlta: {
    type: Date,
    required: true
   },
   sintoma: {
    type: String,
    required: true
   },

   veterinario:{
    type: mongoose.Schema.Types.ObjectId, //obtenemos el id del veterinario
    ref: 'Veterinario', //Añadimos modelo de veterinario para tener la referencia
   }
},{
    timestamps: true,
})

const Paciente = mongoose.model('Paciente', pacientesSchema) //guardamos referencia del modelo y que tipos de datos tenemos
export default Paciente;