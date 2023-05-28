const express = require("express");

const productController = require("../controllers/products");

const router = express.Router();

router.get("/get-products", productController.getProduct);


router.post("/add-product", productController.addProduct);


router.use("/delete-product/:productId", productController.deleteProduct);

module.exports = router;