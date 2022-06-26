const { Router } = require("express");
const router = Router();
const { setSueldo } = require('../controllers/sueldo')

router.post("/sueldo/", setSueldo);