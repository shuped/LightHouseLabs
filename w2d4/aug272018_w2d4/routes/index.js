const express = require('express');
const router = express.Router();
const users = require('../data/users');
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', (req, res, next) => {
  const username = req.session.username || '';
  res.render('index', { title: 'Potato', username: username, admin: req.session.admin });
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  /*
  let user;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      user = users[i];
      break;
    }
  }
 */

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      req.session.username = user.username;
      req.session.admin = user.admin;
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  });
});

module.exports = router;
