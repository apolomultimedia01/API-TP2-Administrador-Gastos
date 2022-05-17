const express = require("express");
const app = express();

const lista = [{id: 1, desc: 'hola'}];

app.get("/", function (req, res) {
  res.json(lista)
});

// router.get("/asignarSueldo", function (req, res) {
//   res.send("OK asignarSueldo");
// });

// router.get("/agregarDinero", function (req, res) {
//   res.send("OK agregarDinero");
// });

// router.get("/agregarGasto", function (req, res) {
//   res.send("OK agregarGasto");
// });

// router.get("/crearCuenta", function (req, res) {
//   res.send("OK crearCuenta");
// });

// router.post("/api/setgestiongasto", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });
