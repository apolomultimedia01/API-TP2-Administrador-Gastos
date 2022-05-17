const express = require("express");
const app = express();

app.use(express.json())

app.use('/home', require('./routes/home'))

app.listen(3000, () => {
  console.log("Server is running on localhost3000");
});

module.exports = app