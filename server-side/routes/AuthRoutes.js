var express = require("express");
const { SignUp, Login } = require("../controller/AuthController.js");
const { userVerification } = require("../Middleware/AuthMiddleware.js");
var router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post('/',userVerification)
module.exports = router;
