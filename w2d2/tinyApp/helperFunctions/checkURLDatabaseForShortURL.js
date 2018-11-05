module.exports = function inDatabase(shortURLObj, userid) {
  if (!shortURLObj) {
    return false;
  }
  return shortURLObj.userId === userid;
};
