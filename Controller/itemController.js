const Item = require('../models/item'); // Import the Mongoose model

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items
    res.status(200).json(items); // Send response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Get a single item by ID
const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id); // Find item by ID
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item', error });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const { name, description, ownerId, category, status, condition, building } = req.body;
  try {
    const newItem = new Item({
      name,
      description,
      ownerId,
      category,
      status,
      condition,
      building,
    });
    const savedItem = await newItem.save(); // Save the item to the database
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
};

// Update an existing item
const updateItem = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Data to update
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, updates, { new: true }); // Update item
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
};

// Update item status (e.g., available, borrowed)
const updateItemStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['available', 'borrowed'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  try {
    const item = await Item.findByIdAndUpdate(id, { status }, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item status', error });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id); // Delete item by ID
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  updateItemStatus,
  deleteItem,
};
