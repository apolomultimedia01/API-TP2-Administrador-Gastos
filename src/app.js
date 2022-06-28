const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./routes/gastos'))
app.use('/sueldo', require('./routes/sueldo'))
app.use('/users', require('./routes/usuario'))
app.use('/limite', require('./routes/limite'))


app.listen(3000, () => {
    console.log('Server on port 3000')
})

module.exports = app