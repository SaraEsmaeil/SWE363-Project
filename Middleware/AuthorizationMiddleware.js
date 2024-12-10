// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/config'); // Import your secret key from the config file

// Middleware to protect routes that require authentication
const protect = async (req, res, next) => {
  let token;

  // Check if the request has Authorization header with Bearer token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token from the authorization header
      token = req.headers.authorization.split(' ')[1];

      // Verify the JWT token and decode it
      const decoded = jwt.verify(token, JWT_SECRET);

      // Find the user based on the decoded ID and add it to the request object
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };

