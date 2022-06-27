const { Router } = require("express");
const router = Router();
const { createLimite } = require('../controllers/limite')  

router.post("/",createLimite);



module.exports = router;