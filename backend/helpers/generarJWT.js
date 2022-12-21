import jwt from "jsonwebtoken";

const generarJWT = (id) =>{
    //.sign crea un nuevo jsonwebtoken
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: "30d",
    });
}

export default generarJWT;