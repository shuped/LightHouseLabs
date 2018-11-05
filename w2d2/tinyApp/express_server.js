const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const randomString = require('./helperFunctions/rngString.js');
const invalidInformaion = require('./helperFunctions/validateUserRegister.js');
const notLoggedIn = require('./helperFunctions/checkIfMember.js');
const urlsForUser = require('./helperFunctions/objectFilter');
const inDatabaseAndBelongsToUser = require('./helperFunctions/checkURLDatabaseForShortURL.js');
const alertAndRedirect = require('./helperFunctions/alertAndRedirect.js');

const app = express();
const PORT = 8080; // default port 8080

const urlDatabase = {
  b2xVn2: {
    userId: 'userRandomID',
    longURL: 'http://www.lighthouselabs.ca',
  },
  '9sm5xK': {
    userId: 'user2RandomID',
    longURL: 'http://www.google.com',
  },
};

const users = {
  userRandomID: {
    id: 'userRandomID',
    email: 'user@example.com',
    password: '$2a$07$Zsz8Nbq9XuzwnkKR9qshM.h6ubU4zyusjUT8yPKtITjhZ0iCf3fBi', // purple-monkey-dinosaur
  },
  user2RandomID: {
    id: 'user2RandomID',
    email: 'user2@example.com',
    password: 'dishwasher-funk',
  },
};

let templateVars = {};

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  secret: 'ae316a67bb0899fc209a7e1e8315ce26e8d0e33f', // 'happydance' sha256'd twice
  maxAge: 24 * 60 * 60 * 1000,
}));
app.use((req, res, next) => {
  const { userId } = req.session;
  templateVars = {
    urls: urlsForUser(urlDatabase, url => url.userId === userId),
    user: users[userId],
  };
  next();
});


app.get('/', (req, res) => {
  const { userId } = req.session;
  return (notLoggedIn(userId, users))
    ? res.redirect('/login')
    : res.render('urls_index', templateVars);
});

app.get('/u/:shortURL', (req, res) => {
  const { shortURL } = req.params;
  return urlDatabase[shortURL]
    ? res.redirect(urlDatabase[shortURL].longURL)
    : res.status(404).send(alertAndRedirect('URL not found.', '/urls'));
});

app.get('/urls/new', (req, res) => {
  const { userId } = req.session;
  return (notLoggedIn(userId, users))
    ? res.status(403).send(alertAndRedirect('Please log in to create URLs', '/login'))
    : res.render('urls_new', templateVars);
});

app.get('/urls/:shortURL', (req, res) => {
  const { shortURL } = req.params;
  const { userId } = req.session;
  templateVars.id = shortURL;
  return (notLoggedIn(userId, users) || !inDatabaseAndBelongsToUser(urlDatabase[shortURL], userId))
    ? res.status(403).send(alertAndRedirect('Please log in to edit your URLs', '/login'))
    : res.render('url_show', templateVars);
});

app.get('/urls', (req, res) => {
  const { userId } = req.session;
  return (notLoggedIn(userId, users))
    ? res.status(403).send(alertAndRedirect('Please log in to view your URLs', '/login'))
    : res.render('urls_index', templateVars);
});

app.get('/login', (req, res) => {
  const { userId } = req.session;
  return (notLoggedIn(userId, users))
    ? res.render('login', templateVars)
    : res.redirect('/urls');
});

app.get('/register', (req, res) => {
  const { userId } = req.session;
  return (notLoggedIn(userId, users))
    ? res.render('register', templateVars)
    : res.redirect('/urls');
});

app.get('/logout', (req, res) => {
  res.clearCookie('session');
  return res.redirect('/login');
});

app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
});


app.post('/urls/new', (req, res) => {
  if (notLoggedIn(req.session.userId, users)) {
    return res.status(403).send(alertAndRedirect('Please login to create new URL.', '/register'));
  }
  const shortURL = randomString();
  urlDatabase[shortURL] = {
    userId: req.session.userId,
    longURL: req.body.longURL,
  };
  return res.redirect(`/urls/${shortURL}`);
});

app.post('/urls/:shortURL', (req, res) => {
  const { userId } = req.session;
  const { shortURL } = req.params;
  const { longURL } = req.body;
  if (notLoggedIn(userId, users)) {
    return res.redirect(403, '/login');
  }
  if (inDatabaseAndBelongsToUser(urlDatabase[shortURL], userId)) {
    urlDatabase[shortURL] = {
      userId,
      longURL,
    };
    return res.redirect(`/urls/${shortURL}`);
  }
  return res.status(403).send(alertAndRedirect('That\'s not your URL to edit.', '/login'));
});

app.post('/urls/:shortURL/delete', (req, res) => {
  const { userId } = req.session;
  const { shortURL } = req.params;
  if (notLoggedIn(userId, users)) {
    return res.status(403).send(alertAndRedirect('Please login.', '/register'));
  }
  if (inDatabaseAndBelongsToUser(urlDatabase[shortURL], userId)) {
    delete urlDatabase[shortURL];
    return res.redirect('../');
  }
  return res.redirect(403, '../');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  if (invalidInformaion(req.body, users)) {
    return res.status(400).send(alertAndRedirect('Regestration information invalid or taken.', '/register'));
  }
  const newUser = {
    id: randomString(),
    email,
    password: hashedPassword,
  };
  users[newUser.id] = newUser;
  req.session.userId = newUser.id;
  return res.redirect('/urls');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usersArray = Object.values(users);
  const user = usersArray.find(u => u.email === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id;
    return res.redirect('/urls');
  }
  return res.status(400).send(alertAndRedirect('User credentials were incorrect.', '/login'));
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
