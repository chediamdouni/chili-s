var express = require("express");
const {
  getAllFoods,
  getFoodDetails,
  addFood,
  updateFood,
  deleteFood,
} = require("../controller/foodController");
var router = express.Router();


router.get("/", getAllFoods);
router.post("/new", addFood);
router.get("/:id", getFoodDetails);
router.put("/update/:id", updateFood);
router.delete("/delete/:id", deleteFood);

module.exports = router;
