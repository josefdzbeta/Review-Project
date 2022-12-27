import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

//Mandamos a llamar la función de express
const app = express();
app.use(express.json())

//Variables de entorno
dotenv.config();

//Detectar deprecación en mongoose
/*process.on('warning', (warning) => {
    console.log(warning.stack);
});*/

//Conectar BD
conectarDB();

const dominiosPermitidos = ['http://localhost:5173']
const corsOptions = {
    origin: function (origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){ //Si es diferente a -1 es que lo encontró
            //El origen del request está permitido
            callback(null, true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions))

app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

//Escuchamos en el puerto 4000
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});