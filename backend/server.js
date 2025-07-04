require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');  // ✅ Import the db connection config
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const searchRoute = require("./routes/searchRoute");

//Routing
const paymentRoute = require("./routes/payment");



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();  // ✅ Now it uses the db.js configuration

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use("/api/search", searchRoute);

app.use("/api/payment/",paymentRoute);

// Start server
const PORT = process.env.PORT || 5000; // If not in .env, it will use 5000 by default
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









