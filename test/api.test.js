// const res = require("express/lib/response");
const request = require("supertest");

const app = require("../src/app");

describe("Administrador de Gastos", () => {
  describe("Corroboracion de datos", () => {
    it("Recibe un array", (done) => {
      request(app)
        .get("/")
        .expect([])
        .expect(200, done);
    });

    it("Envia un sueldo positivo", (done) => {
      const data = {
        sueldo: 1000,
      };

      request(app)
        .post("/sueldo/")
        .send(data)
        .set("Accept", "application/json")
        .expect(201, done);
    });

    it("Envia un sueldo negativo", (done) => {
      const data = {
        sueldo: -2,
      };

      request(app)
        .post("/sueldo/")
        .send(data)
        .expect(400, done);
    });

    it("Agregamos un gasto lleno", (done) => {
      const data = {
        importe: 1000,
        categoria: 'comida',
        descripcion: 'burger',
      };

      request(app)
        .post("/gasto/")
        .send(data)
        .expect(201, done)
    });
    it("Agregamos un gasto vacio", (done) => {
      const data = {
        importe: -1000,
        categoria: null,
        descripcion: null,
      };

      request(app)
        .post("/gasto/")
        .send(data)
        .expect(400, done);
    });

    it("Chequear el gasto agregado", (done) => {
      const data = {
        importe: 1000,
        categoria: 'comida',
        descripcion: 'burger',
      };

      request(app)
        .get('/')
        .expect([data])
        .expect(200, done);
    });
    
    it("Login Exitoso", (done) => {
      const usuario = {
        user: 'cuchau',
        pass: 'Rayo95'
      };

      request(app)
        .post('/login')
        .send(usuario)
        .expect(202, done);
    });
    
    it("Login Denegado", (done) => {
      const usuario = {
        user: 'cachicka',
        pass: 'trueno'
      };

      request(app)
        .post('/login')
        .send(usuario)
        .expect(401, done);
    });
  });
});
