//Primeros pasos express
import  express  from "express";
import dotenv from 'dotenv'
import conectarDB from "./config/db.js";
import VeterinarioRoutes from "./routes/veterinarioRoutes.js";

//Mandamos a llamar la función de express
const app = express();
app.use(express.json())
dotenv.config();

conectarDB();

app.use('/api/veterinarios', VeterinarioRoutes);

//Escuchamos en el puerto 4000
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});