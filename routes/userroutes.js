const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel'); // Import User model for DB operations

const router = express.Router();

// Sign-up route (POST /signup)
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, password } = req.body;

    if (!firstName || !lastName || !phoneNumber || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({ firstName, lastName, phoneNumber, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error in /signup:', error);  // Log complete error object
    res.status(500).json({ message: 'Internal Server Error', error: error.message });  // Include the error message
  }
});

// Sign-in route (POST /signin)
router.post('/signin', async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return res.status(400).json({ message: 'Phone number and password are required' });
    }

      const trimmedPhoneNumber = phoneNumber.trim();
    // Find user by phone number
    const user = await User.findOne({ phoneNumber: trimmedPhoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }else{

    // Generate JWT token
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: 'JWT_SECRET is not set' });
    }


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Sign-in successful', token });
    //res.sendFile('./home.html');
}
  } catch (error) {
    console.error('Error in /signin:', error);  // Log complete error object
    res.status(500).json({ message: 'Internal Server Error', error: error.message });  // Include the error message
  }




});

router.get('home', (req, res) => {
  res.sendFile('./home.html');
});

module.exports = router;