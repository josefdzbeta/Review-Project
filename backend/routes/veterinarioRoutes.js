import express from "express";
import { registrar, perfil, confirmar, autentificarUsuario} from "../controllers/veterinarioController.js";

const router = express.Router();

router.post('/', registrar);
router.get('/perfil', perfil)
router.get('/confirmar/:token', confirmar) //parámetro dinámico de express
router.post('/login', autentificarUsuario)

export default router;

