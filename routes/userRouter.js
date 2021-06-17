const { Router } = require('express'); // importing the Router func from express
const {
  userList,
  userRegister,
  userLogin,
} = require('../controllers/userControllers');
const router = Router(); // init router

router.get('/', userList); // init list of users
router.post('/signup/', userRegister); // init register user
router.post('/login/', userLogin); // init login user

module.exports = router;
