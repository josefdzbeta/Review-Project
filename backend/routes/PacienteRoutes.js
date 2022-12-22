import express from "express";
import { agregarPaciente, obtenerPaciente } from "../controllers/pacienteController.js";
import checkAuth from '../middleware/authMiddleware.js'
const router = express.Router();


   //Para poder agregar un usuario, es necesario tener una cuenta 
router.route("/").post(checkAuth, agregarPaciente).get(checkAuth, obtenerPaciente);


export default router;