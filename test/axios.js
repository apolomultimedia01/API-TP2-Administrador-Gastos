const { expect } = require("chai")
const AxiosDemo = require("../app")

describe('AxiosDemo', () => {
  describe('#get', () => {
    it('llama a home exitosamente', async () => {

      const response = await AxiosDemo.get()

      expect(response.status).to.equal(200) // OK - exitosa
    })

    it('devuelve un texto de estado', () => {

      AxiosDemo.get().then(response => {

        expect(response.statusText).to.equal("OK") // OK - exitosa

      })
    })

    it('llama a agregar gasto exitosamente', async () => {

      const response = await AxiosDemo.getAgregarDinero()

      expect(response.status).to.equal(200) // OK - exitosa
    })

  })
})