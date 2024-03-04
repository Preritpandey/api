const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const { getProducts } = require("../controller/product.Controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
