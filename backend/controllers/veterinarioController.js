import Veterinario from "../models/Veterinario.js"
import generarJWT from "../helpers/generarJWT.js"
import generarId from "../helpers/generarId.js"
import emailRegistro from "../helpers/emailRegistro.js"
import emailResetPassword from "../helpers/emailResetPassword.js"

const registrar =  async (req, res)=>{
    const {email, nombre} = req.body

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

        //Enviar email de confirmación
        emailRegistro({
            email,
            nombre,
            token: veterinarioGuardado.token
        });

        res.json({veterinarioGuardado})
    } catch (error) {
        console.log(error)
    }

}
const perfil = (req, res)=>{
    const {veterinario} = req
    res.json(veterinario)
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
       res.json({
        _id : usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: generarJWT(usuario.id)
       });
    }else{
        const error = new Error('La contraseña es inválida')
        return res.status(403).json({msg: error.message})
    }

}
const resetPassword = async (req, res) =>{
    const {email} = req.body;

    //Buscamos email
    const existeVeterinario = await Veterinario.findOne({email});

    if(!existeVeterinario){
        const error = new Error('El usuario no existe')
        return res.status(400).json({msg: error.message})
    }
    try {
        existeVeterinario.token = generarId();
        await existeVeterinario.save(); //guardamos el token en el usuario para poder reiniciar la contraseña
        
        //Enviar email con instrucciones de reestablecer la contraseña
        emailResetPassword({
            email,
            nombre: existeVeterinario.nombre,
            token: existeVeterinario.token
        })
        
        res.json({msg: 'Hemos enviado un email con las instrucciones'});

    } catch (error) {
        console.log(error)
    }
}
const comprobarToken = async (req, res) =>{
 //Accedemos al token de url con req.params
    const {token} = req.params;
    const tokenValido = await Veterinario.findOne({token});

    if (tokenValido) {
        res.json({msg: 'Token válido y el usuario existe'});
    }else{
        const error = new Error('Token no válido');
        return res.status(400).json({msg: error.message});
    }
}

const nuevoPassword = async (req, res) =>{
    const {token} = req.params; //url
    const {password} = req.body; //body de lo que el usuario escriba en los inputs

    const veterinario = await Veterinario.findOne({token});

    if(!veterinario){
        const error = new Error('Hubo un error');
        return res.status(400).json({msg: error.message});
    }

    try {
        //Guardar nuevo veterinario
        veterinario.token = null; //eliminamos el token del usuario
        veterinario.password = password;
        await veterinario.save() //Guardamos contraseña

        
        res.json({msg: 'Contraseña modificada correctamente'});

    } catch (error) {
        console.log(error)
    }
}

const actualizarPerfil = async (req, res) =>{
    const veterinario = await Veterinario.findById(req.params.id)
    if (!veterinario) {
        const error = new Error('Hubo un error')
        return res.status(400).json({msg: error.message})
    }

    const {email} = req.body
    if (veterinario.email !== req.body.email) {
        const existeEmail = await Veterinario.findOne({email})

        if (existeEmail) {
            const error = new Error('El correo que intenta utilizar ya está en uso')
            return res.status(400).json({msg: error.message})
        }
    }

    try {
        veterinario.nombre = req.body.nombre 
        veterinario.email = req.body.email 
        veterinario.web = req.body.web 
        veterinario.telefono = req.body.telefono 

        const veterinarioActualizado = await veterinario.save()
        res.json(veterinarioActualizado)

    } catch (error) {
        console.log(error)
    }
}
export {
    registrar,
    perfil,
    confirmar,
    autentificarUsuario,
    resetPassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil
}