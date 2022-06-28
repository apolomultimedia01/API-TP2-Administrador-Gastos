const Usuario = require("../models/usuario");
const master = require('../models/master')
const { listaUsuarios } = require("../repositories/usuarios");

const misUsuarios = function (__, res) {
  let users = listaUsuarios;

  res.json(users);
};

module.exports = {
  getUsuarios: misUsuarios,

  loginUsuario: function (req, res) {
    const { usuario } = req.body;
    const { contrasenia } = req.body;

    if (usuario == master.usuario && contrasenia == master.contrasenia) {
      return res.status(202).json({ mensaje: "Usuario Aceptado" });
    }

    return res.status(401).json({ mensaje: "Usuario No Autorizado" });
  },

  registerUsuario: function (req, res) {
    const { usuario } = req.body;
    const { contrasenia } = req.body;
  
    if (usuario != null && contrasenia != null) {
      if (!listaUsuarios.find(us => us.usuario == usuario)) {
        const nuevoUsuario = new Usuario(usuario, contrasenia)
        listaUsuarios.push(nuevoUsuario);
        return res.status(201).json({ mensaje: "Usuario Registrado" });
      } else {
        return res.status(403).json({ mensaje: "Usuario Ya Existe" });
      }
    } else {
      return res.status(400).json({ mensaje: "Datos Invalidos" });
    }
  }
};
