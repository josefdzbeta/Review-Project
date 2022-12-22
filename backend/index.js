//Primeros pasos express
import  express  from "express";
import dotenv from 'dotenv'
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js"

//Mandamos a llamar la función de express
const app = express();
app.use(express.json())

//Variables de entorno
dotenv.config();

//Conectar BD
conectarDB();

app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

//Escuchamos en el puerto 4000
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});