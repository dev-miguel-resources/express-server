const express = require("express");
const router = express.Router();

// routes
router.post("/product");
router.get("/products/total");

module.exports = router;