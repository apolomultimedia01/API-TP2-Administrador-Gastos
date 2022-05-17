const { Router } = require('express')
const router = Router()

const lista = [];

router.get('/', (req, res) => {
    return res.json(lista)
})

router.get("/asignarSueldo", (req, res) => {
    return res.json("OK asignarSueldo");
});

router.get("/asignarSueldo/", (req, res) => {

    const { sueldo } = json(req.body)
    if (sueldo > 0) {
        return res.status(201).json('Sueldo asignado con exito!')
    }
    res.status(400).json('El sueldo no puede ser negativo.')
});

router.get("/agregarGasto", (req, res) => {
    return res.json("OK agregarGasto");
});

router.get("/agregarDinero", (req, res) => {
    return res.json("OK agregarDinero");
});

router.get("/crearCuenta", (req, res) => {
    return res.json("OK crearCuenta");
});

module.exports = router
