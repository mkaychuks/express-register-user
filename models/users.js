const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a UserSchema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 19,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
