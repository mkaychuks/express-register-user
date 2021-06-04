// user registration route
const userRegistration = (req, res) => {
  res.send('This is the user registration route');
};

// user login route
const userLogin = (req, res) => {
  res.send('This is the user login route');
};

module.exports = { userLogin, userRegistration };
