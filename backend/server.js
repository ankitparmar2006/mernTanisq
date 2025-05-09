const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');  // Import body-parser
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());

// Use body-parser middleware to parse incoming JSON and URL encoded data
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TanishqApp')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('DB Error:', err));

// Use authRoutes for authentication API
app.use('/api/auth', authRoutes);

// Set up the server to listen on a port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
