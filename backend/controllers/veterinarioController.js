import Veterinario from "../models/Veterinario.js"

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

export {
    registrar,
    perfil
}