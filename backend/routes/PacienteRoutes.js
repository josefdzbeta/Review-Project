import express from "express";
import { agregarPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente } from "../controllers/pacienteController.js";
import checkAuth from '../middleware/authMiddleware.js'
const router = express.Router();


   //Para poder agregar un usuario, es necesario tener una cuenta 
router.route("/").post(checkAuth, agregarPaciente).get(checkAuth, obtenerPacientes);

router.route("/:id")
   .get(checkAuth, obtenerPaciente)
   .put(checkAuth, actualizarPaciente)
   .delete(checkAuth, eliminarPaciente);
export default router;