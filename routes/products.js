const express = require("express");
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts); //http://localhost:5000/api/products
router.route("/testing").get(getAllProductsTesting); // http://localhost:5000/api/products/testing

module.exports = router;
