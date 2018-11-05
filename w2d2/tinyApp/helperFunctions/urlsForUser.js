// module.exports = function urlsForUser(id, urlDB) {
const id = 'randomUserID';
const urlDB = {
  b2xVn2: {
    userId: 'userRandomID',
    longURL: 'http://www.lighthouselabs.ca',
  },
  '9sm5xK': {
    userId: 'user2RandomID',
    longURL: 'http://www.google.com',
  },
};
function derp() {
  Object.values(urlDB)
    .filter(nestedObj => nestedObj.userId === id)
    .reduce((resultObj, nestedObj, i) => {
      const key = Object.keys(urlDB)[i];
      return {
        ...resultObj,
        [key]: nestedObj,
      };
    }, {});
}
console.log(derp());

// };
