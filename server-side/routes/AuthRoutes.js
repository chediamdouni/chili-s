var express = require("express");
const {SignUp} = require("../controller/AuthController.js");
var router = express.Router();

router.post("/signup", SignUp);

module.exports = router;
