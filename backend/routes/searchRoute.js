const express = require("express");
const router = express.Router();
const { searchProduct } = require("../controllers/searchController");

router.get("/", searchProduct);  // /api/search?query=

module.exports = router;
