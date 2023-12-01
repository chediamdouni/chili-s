var express = require("express");
const {
  getAllFoods,
  getFoodDetails,
  addFood,
  updateFood,
  deleteFood,
} = require("../controller/foodController");
const upload = require('../services/multerService.js'); 
var router = express.Router();

router.get("/", getAllFoods);
router.get("/:id", getFoodDetails);
router.post("/new", addFood);
router.put("/update/:id", updateFood);
router.delete("/delete/:id", deleteFood);

module.exports = router;
