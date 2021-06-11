const Users = require('../models/usersModel');
const hashPassword = require('../utils/hashingScript');

// Total number of users
// getting the list of all the users in the db
const userList = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    res.status(500).send('Internal Server error');
  }
};

// Registration
// this controller handles the registration of users in the DB
// also hashes the password of the registered user.
const userRegister = async (req, res) => {
  const passwordHash = await hashPassword(req.body.password);
  try {
    const existingUser = await Users.findOne({ email: req.body.email });

    if (existingUser) {
      res.status(500).json({ message: 'Internal Sever Error' });
    }

    const newUser = new Users({
      username: req.body.username,
      password: passwordHash,
      email: req.body.email,
    });

    const saveUser = await newUser.save();
    res.status(201).json({ success: true, data: saveUser });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { userList, userRegister };
