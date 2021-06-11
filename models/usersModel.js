const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 25,
    required: true,
  },
  password: {
    type: String,
    minlength: 4,
    required: true,
  },
  email: {
    type: String,
    minlength: 4,
    maxlength: 25,
    required: true,
    unique: true,
  },
});

Users = mongoose.model('users', userSchema); // the model schema for mongo db atlas

module.exports = Users;
