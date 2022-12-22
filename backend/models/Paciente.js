import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    propietario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    sintomas: {
      type: String,
      required: true,
    },
    veterinario: {
      type: mongoose.Schema.Types.ObjectId, //obtenemos el id del veterinario
      ref: "Veterinario", //Añadimos modelo de veterinario para tener la referencia
    },
  },
  {
    timestamps: true,
  }
);

const Paciente = mongoose.model('Paciente', pacientesSchema); 
export default Paciente;


//guardamos referencia del modelo y que tipos de datos tenemos