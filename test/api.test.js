const res = require("express/lib/response");
const request = require("supertest");

const app = require("../src/app");

describe("Administrador de Gastos", () => {
  describe("GETS - Codigo 200", () => {
    it("Home", (done) => {
      request(app).get("/").expect(200, done);
    });

    it("Asignar Sueldo", (done) => {
      request(app).get("/asignarsueldo").expect(200, done);
    });

    it("Agregar Gasto", (done) => {
      request(app).get("/agregarGasto").expect(200, done);
    });

    it("Agregar Dinero", (done) => {
      request(app).get("/agregarDinero").expect(200, done);
    });

    it("Crear Cuenta", (done) => {
      request(app).get("/crearCuenta").expect(200, done);
    });
  });

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
        .post("/asignarSueldo/")
        .send(data)
        .set("Accept", "application/json")
        .expect(201, done);
    });

    it("Envia un sueldo negativo", (done) => {
      const data = {
        sueldo: -2,
      };

      request(app)
        .post("/asignarSueldo/")
        .send(data)
        .expect(400, done);
    });

    it("agregamos un gasto lleno", (done) => {
      const data = {
        importe: 1000,
        categoria: 'comida',
        descripcion: 'burger',
      };

      request(app)
        .post("/agregarGasto/")
        .send(data)
        .expect(201, done)
    });
    it("agregamos un gasto vacio", (done) => {
      const data = {
        importe: -1000,
        categoria: null,
        descripcion: null,
      };

      request(app)
        .post("/agregarGasto/")
        .send(data)
        .expect(400, done);
    });

    it("chequear el gasto agregado", (done) => {
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
    
    it("Login exitoso", (done) => {
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
