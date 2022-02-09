const express = require("express");

const router = express.Router();

const { create, read, remove, etc } = require("../controllers")
const { authCheck, adminCheck } = require("../middlewares/auth")
const { validateCreateProduct } = require("../validators")

// routes-endpoints - bad practice
router.get("/user", (req, res, next) => {
  res.json({
    data: "hey you hit user API endpoint",
  });
});

// good practice
//router.post("/product", authCheck, adminCheck, validateCreateProduct, create);

module.exports = router;
