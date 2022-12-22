const checkAuth = (req, res, next) =>{ //Next detiene la ejecución del código y salta al siguiente middleware si no detecta 

    //Comprobar JWT
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Si tiene el token con Bearer')
    }
    //Si no está el token lanza el siguiente error
    const error = new Error('Token no válido o inexistente')
    res.status(403).json({msg: error.message})
    next();
}

export default checkAuth;