const request = require('supertest');
const app = require("../src/app.js");

describe("Administrador de Gastos", () => {

  it('GETS - Codigo 200', done => {
    request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
  })

/*
  describe("Status de rutas", () => {
    
    describe("GETS - Codigo 200", () => {

        it("home", async () => {
          const response = await app.get();

          expect(response.status).to.equal(200); // OK - exitosa
        });

        it("asignar gasto", async () => {
          const response = await app.getAsignarSueldo();

          expect(response.status).to.equal(200); // OK - exitosa
        });

        it("agregar dinero", async () => {
          const response = await app.getAgregarDinero();

          expect(response.status).to.equal(200); // OK - exitosa
        });

        it("agregar gasto", async () => {
          const response = await app.getAgregarGasto();

          expect(response.status).to.equal(200); // OK - exitosa
        });

        it("crear cuenta", async () => {
          const response = await app.getCrearCuenta();

          expect(response.status).to.equal(200); // OK - exitosa
        });
      });
  });
*/

});
