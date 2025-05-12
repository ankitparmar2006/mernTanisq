const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate user via JWT
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user data to the request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();  // If user is admin, proceed
  } else {
    return res.status(403).json({ message: 'You are not authorized to access this route.' });
  }
};

// Route to add a new product
router.post('/addProduct', authenticateUser, isAdmin, async (req, res) => {
  try {
    const { name, category, price, image, secimg, rating, description } = req.body;

    const newProduct = new Product({
      name,
      category,
      price,
      image,
      secimg,
      rating,
      description
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});

// Route to get stats (total sales and earnings)
router.get('/stats', authenticateUser, isAdmin, async (req, res) => {
  try {
    const totalSales = await Order.countDocuments();
    const totalEarnings = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);

    res.status(200).json({
      totalSales,
      totalEarnings: totalEarnings[0]?.total || 0
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ message: 'Error fetching stats', error: error.message });
  }
});

module.exports = router;
