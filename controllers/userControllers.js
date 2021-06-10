const Users = require('../models/usersModel');

const userList = (req, res) => {
  Users.find()
    .then((results) => res.status(200).json({ success: true, data: results }))
    .catch((err) =>
      res.status(500).json({ success: false, message: 'internal server error' })
    );
};

module.exports = { userList };
