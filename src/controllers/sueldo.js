let { elSueldo } = require('../repositories/sueldo')

module.exports = {
  setSueldo: function (req, res) {
    const { sueldo } = req.body;
    if (sueldo > 0) {
      elSueldo = sueldo;
      return res.status(201).json({ mensaje: "Sueldo asignado con exito!" });
    }
    res.status(400).json({ mensaje: "El sueldo no puede ser negativo." });
  },
};
