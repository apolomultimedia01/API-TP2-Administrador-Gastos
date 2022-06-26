const { Router } = require("express");
const Gasto = require('../models/gasto')
const router = Router();
const { getGastos, createGasto, deleteGasto } = require('../controllers/gasto')  
const { listaGastos } = require('../repositories/gastos')

router.get("/", getGastos);

router.post("/gasto/",createGasto);

router.delete("/gasto/:descripcion", deleteGasto);

module.exports = router;