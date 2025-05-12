const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {  // Check if user exists and is admin
    return next();  // Proceed if user is admin
  } else {
    return res.status(403).json({ message: 'You are not authorized to access this route.' });  // Unauthorized
  }
};
