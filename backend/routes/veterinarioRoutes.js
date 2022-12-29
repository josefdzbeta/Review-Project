import express from "express";
import { registrar, perfil, confirmar, autentificarUsuario, resetPassword, comprobarToken, nuevoPassword, actualizarPerfil} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Área pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar); //parámetro dinámico de express
router.post('/login', autentificarUsuario);
//Área pública - reset password
router.post('/reset-password', resetPassword); //Validar email de usuario

/*
router.get('/reset-password/:token', comprobarToken); //Comprobar token
router.post('/reset-password/:token', nuevoPassword); //Almacenar nueva contraseña
*/

router.route('/reset-password/:token').get(comprobarToken).post(nuevoPassword) 

//Área privada
router.get('/perfil',checkAuth, perfil)//Una vez entra el usuario en /perfil, va al middleware, se ejecuta el código en el middleware y pasaría al siguiente middleware que es perfil
router.put('/perfil/:id', checkAuth, actualizarPerfil)

export default router;
