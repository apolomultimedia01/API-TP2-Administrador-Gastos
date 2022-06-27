const { Router } = require("express");
const { limite } = require('../repositories/limite')
const router = Router();
const { checkLimite, createLimite } = require('../controllers/limite')  
const { listaGastos } = require('../repositories/gastos')

router.post("/",createLimite);



module.exports = router;