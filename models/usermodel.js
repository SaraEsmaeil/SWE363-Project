const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for the user
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
     phoneNumber: {
        type: String,
        required: true,
        match: /^(\+966)[0-9]{9}$/,  // Example regex for Saudi numbers
      },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

// Middleware: Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  console.log("Password before hashing:", this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log("Password after hashing:", this.password);
  next();
});


// Method: Compare hashed password with the entered password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the model
const User = mongoose.model('User', userSchema);

module.exports = User;
