import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";
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
        type: String,
        default: generarId()
    },
    confirmado:{
        type: Boolean,
        default: false
    }


});

//Hashear password
veterinarioSchema.pre('save', async function(next) {
    if(!this.isModified('password')){ //Si el password está hasheado
        next(); //salta hacia el siguiente middleware
    }
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})
veterinarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password) //Nos permite saber si la contraseña es la correcta
    //Compare devuelve true or false
}
const Veterinario = mongoose.model('Veterinario', veterinarioSchema);

export default Veterinario;