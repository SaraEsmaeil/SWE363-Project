// middleware/itemValidationMiddleware.js

const { check, validationResult } = require('express-validator');

// Validate item input data before adding a new item
const validateItem = [
check('name').notEmpty().withMessage('Item name is required'),
check('description').notEmpty().withMessage('Item description is required'),
check('category').notEmpty().withMessage('Category is required'),
check('owner').notEmpty().withMessage('Owner is required'),

// Handle validation result
(req, res, next) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}
next();
}
];

module.exports = { validateItem };
