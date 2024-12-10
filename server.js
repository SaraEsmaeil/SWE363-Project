const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating authentication tokens
const { connectDB } = require('./db.js');
const cors = require('cors');
const userRoutes = require('./routes/userroutes'); // Import user routes
const notificationRoute = require('./routes/NotificationRoutes'); // Import user routes
const itemRoutes = require('./routes/itemRoutes'); // Import item routes
const itemRoutes3 = require('./routes/categoryRoutes'); // Import item and category routes

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));

// Middleware to parse JSON requests
app.use(express.json());

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'mainPage.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.use('/api/users', userRoutes);

// Use user routes
app.use('/api/users', userRoutes);

app.use('/Images', express.static('Images'));

// Add your item routes
app.use('/api/items', itemRoutes);

app.use(express.static(path.join(__dirname, 'HTML')));

app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname,'HTML', 'itemdetails.html'));
});

// Add  item routes2

app.use('/api/items', itemRoutes);

app.use(express.static(path.join(__dirname, 'HTML')));

app.get('/add-items', (req, res) => {
    res.sendFile(path.join(__dirname,'HTML', 'AddItems.html'));
});

// Add  item routes3

app.use('/api/items/category', itemRoutes, itemRoutes3);

app.use(express.static(path.join(__dirname, 'HTML')));

app.get('/add-items-category', (req, res) => {
    res.sendFile(path.join(__dirname,'HTML', 'Categories and items.html'));
});

app.use('/api/notifications', notificationRoute);

app.use(express.static(path.join(__dirname, 'HTML')));

app.get('/notifications', (req, res) => {
  res.sendFile(path.join( __dirname, 'HTML','Notification Icon.html'));
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});