module.exports = function generateRandomString() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let rngStr = '';
  for (let i = 0; i < 6; i += 1) {
    rngStr += alphabet[Math.ceil(Math.random() * 61)];
  }
  return rngStr;
};
