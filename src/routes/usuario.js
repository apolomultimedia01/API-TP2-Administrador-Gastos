const { Router } = require("express");
const router = Router();
const { getUsuarios, loginUsuario, registerUsuario } = require('../controllers/usuario')


router.get("/", getUsuarios);

router.post("/login", loginUsuario);
  
router.post("/register", registerUsuario);

module.exports = router