const { Router } = require('express');
const {
  userLogin,
  userRegistration,
} = require('../controllers/userController');

const router = Router();

router.post('/login', userLogin); // login route
router.post('/user/signup', userRegistration); // registration route

module.exports = router;
