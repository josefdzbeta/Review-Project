import express from "express";
import { registrar, perfil, confirmar, autentificarUsuario} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/', registrar);
router.get('/confirmar/:token', confirmar) //parámetro dinámico de express
router.post('/login', autentificarUsuario) 

router.get('/perfil',checkAuth, perfil)//Una vez entra el usuario en /perfil, va al middleware, se ejecuta el código en el middleware y pasaría al siguiente middleware que es perfil

export default router;
