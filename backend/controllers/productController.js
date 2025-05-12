const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, type, price, image, secimg, rating, sold } = req.body;
  const product = new Product({ name, type, price, image, secimg, rating, sold });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, type, price, image, secimg, rating, sold } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, type, price, image, secimg, rating, sold },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total earnings and sales
exports.getStats = async (req, res) => {
  try {
    const products = await Product.find();
    const totalSales = products.reduce((acc, product) => acc + product.sold, 0);
    const totalEarnings = products.reduce((acc, product) => acc + product.price * product.sold, 0);
    res.json({ totalSales, totalEarnings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
