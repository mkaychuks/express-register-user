const { Router } = require('express'); // importing the Router func from express
const { userList, userRegister } = require('../controllers/userControllers');
const router = Router(); // init router

router.get('/', userList); // init list of users
router.post('/signup/', userRegister); // init register user

module.exports = router;
