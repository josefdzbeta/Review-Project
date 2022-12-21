import express from "express";

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Desde Api/Veterinarios')
})

router.get ('/login', (req, res)=>{
    res.send('Desde Api/Veterinarios/Login')
})
export default router;

