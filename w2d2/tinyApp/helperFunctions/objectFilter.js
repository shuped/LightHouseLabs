module.exports = function objectFilter(parentObj, filtercb) {
  return Object.entries(parentObj)
    .reduce((resultObj, [key, value], index, array) => {
      if (filtercb(value, index, array)) {
        return {
          ...resultObj,
          [key]: value,
        };
      }
      return resultObj;
    }, {});
};


// const obj = {
//   nestedOj1: {
//     id: 'userRandomID',
//     email: 'user@example.com',
//     password: 'purple-monkey-dinosaur',
//   },
//   nestedObj2: {
//     id: 'user2RandomID',
//     email: 'user2@example.com',
//     password: 'dishwasher-funk',
//   },
//   nestedObj3: {
//     id: 'user2RandomID',
//     email: 'user2@example.cdfaom',
//     password: 'dishwasher-dfadfunk',
//   },
// };

// filter out nestedObj's by id property
// want to filter by id = "user2RandomID"
// {
//   nestedobj2: {
//     id: 'user2RandomID',
//     email: 'user2@example.com',
//     password: 'dishwasher-funk',
//   },
//   nestedobj3: {
//     id: 'user2RandomID',
//     email: 'user2@example.cdfaom',
//     password: 'dishwasher-dfadfunk',
//   },
// };
