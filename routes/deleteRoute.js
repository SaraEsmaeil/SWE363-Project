const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/usermodel'); // Assuming you have a User model defined in models/User.js

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// DELETE route to remove a user by ID
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;  // Get the user ID from the URL
    try {
        // Find and delete the user by ID
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});