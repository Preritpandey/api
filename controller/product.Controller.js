const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getProducts,
};
