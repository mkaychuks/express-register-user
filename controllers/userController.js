const User = require('../models/users');

// user registration route
const userRegistration = async (req, res) => {
  const q = await User.find();
  res.json(q);
};

// user login route
const userLogin = (req, res) => {
  res.send('This is the user login route');
};

module.exports = { userLogin, userRegistration };
