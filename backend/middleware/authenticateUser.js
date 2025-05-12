const jwt = require('jsonwebtoken');

// Middleware to authenticate user via JWT
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');  // Get token from request headers
  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });  // No token found
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    req.user = decoded;  // Attach user data to the request object
    next();  // Proceed to the next middleware or route
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });  // If token is invalid
  }
};
