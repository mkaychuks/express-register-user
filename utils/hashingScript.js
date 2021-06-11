const bcrypt = require('bcrypt');

/* This function handles the hashing of password
using the async-await method of functions. returns the hashed version of the
password and is then used for putting data in the db
*/
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(error);
  }
};

module.exports = hashPassword;
