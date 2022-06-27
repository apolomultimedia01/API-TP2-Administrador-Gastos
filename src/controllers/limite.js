let { limite }  = require('../repositories/limite')
const { listaGastos } = require('../repositories/gastos')
// const gasto = require('./gasto')

function checkLimite(gastoAgregar){
    let total = 0
    for (let cosas of listaGastos){
        total += cosas.importe
        // console.log(cosas.importe);
    }

    return (total + gastoAgregar.importe) >= limite 
}

module.exports = {
    checkLimite,
    createLimite: function (req, res){
        let { limiteCreado } = req.body

        if(limiteCreado > 0 && limiteCreado != null || limiteCreado != undefined){
            limite = limiteCreado;
            return res.status(201).json({msg: "Limite seteado exitosamente"})
        }else{
            return res.status(400).json({msg: "Limite inválido"})
        }

    }
}