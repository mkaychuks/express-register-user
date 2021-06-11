const Users = require('../models/usersModel');
const hashPassword = require('../utils/hashingScript');

// Total number of users
// getting the list of all the users in the db
const userList = (req, res) => {
  Users.find()
    .then((results) => res.status(200).json({ success: true, data: results }))
    .catch((err) =>
      res.status(500).json({ success: false, message: 'internal server error' })
    );
};

// Registration
// this controller handles the registration of users in the DB
// also hashes the password of the registered user.
const userRegister = async (req, res) => {
  const passwordHash = await hashPassword(req.body.password);
  try {
    const existinguser = await Users.findOne({ email: req.body.email });
    if (existinguser) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
    const newUser = new Users({
      username: req.body.username,
      password: passwordHash,
      email: req.body.email,
    });
    newUser
      .save()
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(500).json({ message: err }));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { userList, userRegister };
