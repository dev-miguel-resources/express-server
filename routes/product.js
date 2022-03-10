const express = require("express");
const router = express.Router();

const { create, productsCount, listAll, removeSoft, read, update, list } = require("../controllers/product");

// routes
router.post("/product", create);
router.get("/products/total", productsCount);
router.get("/products/:count", listAll);
router.patch("/product/:slug", removeSoft);
router.get("/product/:slug", read);
router.put("/product/:slug", update);
router.post("/products", list);

module.exports = router;


