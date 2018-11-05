module.exports = function checkIfMember(userid, usersDB) {
  const userIds = Object.keys(usersDB);
  if (!userIds.find(id => id === userid)) {
    return true;
  }
  return false;
};
