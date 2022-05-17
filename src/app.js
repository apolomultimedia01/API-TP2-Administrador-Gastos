const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./routes/home'))

app.listen(3000, () => {
    console.log('Server on port 3000')
})

module.exports = app