const Usuario = require("../models/usuario");
const master = require('../models/master')
const { usuarios } = require("../repositories/usuarios");

const misUsuarios = function (__, res) {
  let users = usuarios;

  res.json(users);
};

module.exports = {
  getUsuarios: misUsuarios,

  loginUsuario: function (req, res) {
    const { user } = req.body;
    const { pass } = req.body;

    if (user == master.user && pass == master.pass) {
      return res.status(202).json({ mensaje: "Usuario Aceptado" });
    }

    return res.status(401).json({ mensaje: "Usuario No Autorizado" });
  },

  registerUsuario: function (req, res) {
    const { user } = req.body;
    const { pass } = req.body;
  
    if (user != null && pass != null) {
      if (!usuarios.find((us) => us.user == user)) {
        const nuevoUser = new Usuario(user, pass)
        usuarios.push(nuevoUser);
        return res.status(201).json({ mensaje: "Usuario Registrado" });
      } else {
        return res.status(403).json({ mensaje: "Usuario Ya Existe" });
      }
    } else {
      return res.status(400).json({ mensaje: "Datos Invalidos" });
    }
  }
};
