const res = require('express/lib/response');
const request = require('supertest')

const app = require('../src/app')

describe("Administrador de Gastos", () => {

    describe("GETS - Codigo 200", () => {

        it('Home', done => {
            request(app)
                .get('/')
                .expect(200, done)
        })

        it('Asignar Sueldo', done => {
            request(app)
                .get('/asignarsueldo')
                .expect(200, done)
        })

        it('Agregar Gasto', done => {
            request(app)
                .get('/agregarGasto')
                .expect(200, done)
        })

        it('Agregar Dinero', done => {
            request(app)
                .get('/agregarDinero')
                .expect(200, done)
        })

        it('Crear Cuenta', done => {
            request(app)
                .get('/crearCuenta')
                .expect(200, done)
        })
    })

    describe("Corroboracion de datos", () => {
        it('Recibe un array', done => {
            request(app)
                .get('/')
                .expect([])
                .expect(200, done)
        })

        it('Envia un sueldo positivo', done => {

            const data = {
                sueldo: 1000
            }

            request(app)
                .post('/asignarSueldo/')
                .send(data)
                .set('Accept', "application/json")
                .expect(201, done)
        })

        // Solucionar verificacion del sueldo...

        // it('Envia un sueldo negativo', done => {
        //     request(app)
        //         .post('/asignarSueldo/')
        //         .send(-2)
        //         .expect(400, done)
        // })
    })
});