const Gasto = require("../models/gasto");
const { listaGastos } = require("../repositories/gastos");
const { checkLimite } = require("./limite");

const losGastos = function (__, res) {
  return res.json(listaGastos);
};

module.exports = {
  getGastos: losGastos,

  createGasto: function (req, res) {
    const { importe, descripcion, categoria } = req.body;
    const gasto = new Gasto(importe, descripcion, categoria);

    if (gasto.importe > 0 && gasto.categoria != null && gasto.descripcion != null) {
      if(!checkLimite(gasto)){
        listaGastos.push(gasto);
        return res.status(201).json({ mensaje: "Gasto creado con exito!" });
      }else{
        return res.status(422).json({mensaje: "Limite alcanzado o superado"})
      }
    }
    return res.status(400).json({ mensaje: "Gasto inválido!" });
  },

  deleteGasto: function (req, res) {
    let lista = listaGastos;
    const gastoIndex = lista.find((uno) => {
      if (req.params.descripcion == uno.descripcion) {
        return lista.indexOf(uno.descripcion);
      } else return null;
    });

    if (gastoIndex == null || gastoIndex == undefined) {
      res.status(404);
      return res.json({ message: "Gasto no existente" });
    } else {
      res.status(200);
      lista.splice(gastoIndex, 1);
      return res.json({ message: "Gasto eliminado con exito" });
    }
  },
};
