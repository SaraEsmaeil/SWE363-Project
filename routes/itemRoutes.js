const express = require('express');
const Item = require('../models/itemModel');
const fs = require('fs');
const router = express.Router();
const dbFilePath = './Database.json';

// Add a new item
router.post('/', async (req, res) => {
  const { name, description, owner, status, condition, building } = req.body;

  if (!name || !description || !owner) {
    return res.status(400).json({ message: 'Name, description, and owner are required' });
  }

  try {
    const newItem = new Item({ name, description, owner, status, condition, building });
    const savedItem = await newItem.save();

    // Update JSON file
    const rawData = fs.existsSync(dbFilePath) ? fs.readFileSync(dbFilePath, 'utf-8') : '{}';
    const data = rawData.trim() ? JSON.parse(rawData) : { users: [], items: [], categories: [], notifications: [] };
    data.items.push(savedItem);
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf-8');

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error saving item', error: error.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
});

module.exports = router;