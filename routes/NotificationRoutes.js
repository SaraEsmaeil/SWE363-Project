const express = require('express');
const Notification = require('../models/NotificationModel');
const router = express.Router();

// Add a new notification
router.post('/', async (req, res) => {
  const { message, user, date } = req.body;

  if (!message || !user) {
    return res.status(400).json({ message: 'Message and user are required' });
  }

  try {
    const newNotification = new Notification({ message, user, date });
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(500).json({ message: 'Error saving notification', error: error.message });
  }
});

// Get all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error: error.message });
  }
});

module.exports = router;