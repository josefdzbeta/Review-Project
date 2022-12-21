//Primeros pasos express
import  express  from "express";
import dotenv from 'dotenv'
import conectarDB from "./config/db.js";

//Mandamos a llamar la función de express
const app = express();
dotenv.config();

conectarDB();

app.use('/', (req,res)=>{
    res.send('hola mundo')
})

//Escuchamos en el puerto 4000
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});