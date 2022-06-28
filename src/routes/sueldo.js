const { Router } = require("express");
const router = Router();
const { setSueldo } = require('../controllers/sueldo')

router.post("/", setSueldo);

module.exports = router