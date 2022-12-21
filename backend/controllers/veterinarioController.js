import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js"

const registrar =  async (req, res)=>{
    const {email} = req.body

    //Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email}) //Permite buscar por los atributos que tiene los registros en la bd

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message})
    }
    
    try {
        //Guardar un nuevo veterinario
        const veterinario = new Veterinario(req.body); 
        const veterinarioGuardado = await veterinario.save() //metodo para guardar de mongoose
        res.json({veterinarioGuardado})
    } catch (error) {
        console.log(error)
    }

}
const perfil = (req, res)=>{
    res.json({msg: 'Mostrando Perfil'})
}

const confirmar = async (req, res)=>{

    //Confirmar cuenta de usuario
    const {token} = req.params//Leemos parámetros dinámico en la url
    const usuarioConfirmar = await Veterinario.findOne({token}) //Buscamos el usuario con el token válido

    if (!usuarioConfirmar) {
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message})
    }

    try {
        //modificamos el token y guardamos el usuario confirmado
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({msg: 'Usuario confirmado correctamente'});

    } catch (error) {
        console.log(error)
    }
}

const autentificarUsuario = async (req, res) =>{
    //1. comprobar que existe el usuario
    //2. que esté la cuenta del usuario autentificada
    //3. Pass bien escrita
    //4. Autentificar

    const {email, password} = req.body

    //Comprobar si el usuario existe
    const usuario = await Veterinario.findOne({email})
    
    if (!usuario) {
        const error = new Error('El Usuario no existe');
        return res.status(403).json({msg: error.message})
    }

    //Comprobar si el usuario tiene la cuenta confirmada
    if (!usuario.confirmado) {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({msg: error.message})
    }

    // Comprobar que el password que introduce es correcto
    if(await usuario.comprobarPassword(password)){
       //Autentificar
       res.json({token: generarJWT(usuario.id)});
    }else{
        const error = new Error('La contraseña es inválida')
        return res.status(403).json({msg: error.message})
    }

}

export {
    registrar,
    perfil,
    confirmar,
    autentificarUsuario
}