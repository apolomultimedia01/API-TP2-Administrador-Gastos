const express = require("express");
const axios = require('axios')
const app = express();

module.exports = {
  get: () => {
    return axios.get('http://127.0.0.1:3000') // axios.get devuelve una promesa
  },

  getAgregarDinero: () => {
    return axios.get('http://127.0.0.1:3000/agregarDinero') // axios.get devuelve una promesa
  },

  getMensaje: () => {
    return axios.get('http://127.0.0.1:3000/mensaje') // axios.get devuelve una promesa
  }
}

app.get("/", function (req, res) {
    res.send('Conexion exitosa!');
});

app.get("/agregarDinero", function (req, res) {
    res.send('Agregar Dinero');
});

app.get("/mensaje", function (req, res) {
  res.send('Hola Mundo');
});

app.listen(3000, () => {
    console.log("Server is running on localhost3000");
});