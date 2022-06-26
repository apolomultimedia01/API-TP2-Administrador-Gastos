const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./routes/gastos'))
// app.use('/', require('./routes/sueldo'))
// app.use('/', require('./routes/usuarios'))

app.listen(3000, () => {
    console.log('Server on port 3000')
})

module.exports = app