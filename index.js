// tPtGkyRDOHXBy5oy    PASSWORD
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
app.use(express.json());

/// routes
// app.use("/api/products", productRoute);

// app.get("/", (req, res) => {
//   res.send("Hello from node api");
// });

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product.
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
///Delete a product.
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product Not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://pandeyprerit45:tPtGkyRDOHXBy5oy@cluster0.a36e3tc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Connected to port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
