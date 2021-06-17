const bcrypt = require('bcrypt');

/* This function handles the hashing of password
using the async-await method of functions. returns the hashed version of the
password and is then used for putting data in the db
*/
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(error);
  }
};

// comparing a password for security checks
const comparePassword = async (password, registerPassword) => {
  try {
    const correctCheck = await bcrypt.compare(password, registerPassword);
    return correctCheck;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { hashPassword, comparePassword };
