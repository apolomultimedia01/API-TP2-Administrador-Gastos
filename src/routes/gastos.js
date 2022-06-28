const { Router } = require("express");
const router = Router();
const { getGastos, createGasto, deleteGasto } = require('../controllers/gasto')  

router.get("/", getGastos);

router.post("/gasto/",createGasto);

router.delete("/gasto/:descripcion", deleteGasto);

module.exports = router;