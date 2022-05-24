const { Router } = require('express')
const router = Router()

const lista = [];

router.get('/', (req, res) => {
    return res.json(lista)
})

router.get("/asignarSueldo", (req, res) => {
    return res.json("OK asignarSueldo");
});

router.post("/asignarSueldo/", (req, res) => {

    const { sueldo } = req.body
    if (sueldo > 0) {
        return res.status(201).json({mensaje: 'Sueldo asignado con exito!'})
    }
    res.status(400).json({mensaje:'El sueldo no puede ser negativo.'})
});

router.get("/agregarGasto", (req, res) => {
    return res.json("OK agregarGasto");
});

router.post("/agregarGasto/", (req, res) => {
    const gasto  = req.body
    if (gasto.importe > 0 && gasto.categoria != null && gasto.descripcion != null ) {
        lista.push(gasto)
        return res.status(201).json({mensaje: 'Sueldo asignado con exito!'})
    }
    res.status(400).json({mensaje:'El sueldo no puede ser negativo.'})
});

router.get("/agregarDinero", (req, res) => {
    return res.json("OK agregarDinero");
});

router.get("/crearCuenta", (req, res) => {
    return res.json("OK crearCuenta");
});

module.exports = router
