const checkForDupe = require('./objectFilter.js');

const isNotEmpty = obj => Object.keys(obj).length !== 0;

module.exports = function isUserRegisterInvalid(reqbody, usersDB) {
  const { email, password } = reqbody;
  const duplicateUsers = checkForDupe(usersDB, user => user.email === email);

  if ((email || password) === '') {
    return true;
  }
  if (isNotEmpty(duplicateUsers)) {
    return true;
  }
  return false;
};
