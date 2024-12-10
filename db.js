const mongoose = require('mongoose');
const User = require('./models/usermodel'); // Import the User model
const Item = require('./models/itemModel'); // Import the Item model
const fs = require('fs').promises; // Use the promise-based `fs` module

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/Database_json', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process on failure
  }
};

// Fetch all items
const checkData = async () => {
  try {
    const items = await Item.find();
    console.log('Items in database:', items);
  } catch (error) {
    console.error('Error fetching items:', error.message);
  }
};

// Add a new user
const addUser = async (firstName, lastName, phoneNumber, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, phoneNumber, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
  } catch (error) {
    if (error.code === 11000) {
      console.error('Duplicate user error:', error.message);
    } else {
      console.error('Error saving user:', error.message);
    }
  }
};

// Fetch all users
const checkUsers = async () => {
  try {
    const users = await User.find();
    console.log('Users in database:', users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};

// Load data from JSON and insert into the database
const loadFromJSON = async () => {
  try {
    console.log('Attempting to read Database.json...');
    const rawData = await fs.readFile('Database_json', 'utf-8');
    const data = JSON.parse(rawData);

    // Insert users
    if (data.users && data.users.length > 0) {
      await User.insertMany(data.users, { ordered: false });
      console.log('Users added to database');
    }

    // Insert items
    if (data.items && data.items.length > 0) {
      await Item.insertMany(data.items, { ordered: false });
      console.log('Items added to database');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Database.json file not found');
    } else {
      console.error('Error loading data from JSON file:', error.message);
    }
  }
};

// Save database data to JSON
const saveToJSON = async () => {
  try {
    // Fetch users and items
    const [users, items] = await Promise.all([User.find(), Item.find()]);

    const data = {
      users: users.map((user) => ({
        _id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        password: user.password, // Note: Consider not storing raw passwords here
      })),
      items: items.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        description: item.description,
        owner: item.ownerId, // Ensure this matches your schema
        status: item.status,
        condition: item.condition,
        building: item.building,
      })),
    };

    await fs.writeFile('Database_json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('Data successfully saved to Database.json');
  } catch (error) {
    console.error('Error saving data to JSON file:', error.message);
  }
};

module.exports = { connectDB, loadFromJSON, saveToJSON, checkData, checkUsers, addUser };
