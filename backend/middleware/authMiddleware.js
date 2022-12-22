import jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";

const checkAuth = async (req, res, next) =>{ //Next detiene la ejecución del código y salta al siguiente middleware si no detecta 

    let token;
    //Comprobar JWT
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]; //obtenemos sólo el jwt
            const decoded = jwt.verify(token, process.env.JWT_SECRET); //verify toma diferentes parámetros
            
            //req.veterinario crea una sesión con la información del veterinario
            req.veterinario = await Veterinario.findById(decoded.id).select('-password -token -confirmado');

            return next();
        } catch (error) {
            const e = new Error('Token no válido');
            return res.status(403).json({msg: e.message});
        }
    }
    if (!token) {
        const error = new Error('Token no válido o inexistente');
        res.status(403).json({msg: error.message});
    }
   
    next();
}

export default checkAuth;