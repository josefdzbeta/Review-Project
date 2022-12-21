import mongoose from "mongoose";

//definiendo schema

const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true //Eliminamos espacios en blancos
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web:{
        type: String, //No es obligatorio
        default: null,
    },
    token: {
        type: String
    },
    confirmado:{
        type: Boolean,
        default: false
    }


});


const Veterinario = mongoose.model('Veterinario', veterinarioSchema);

export default Veterinario;