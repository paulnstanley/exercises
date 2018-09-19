const express = require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')

const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cookieSession({
  name: 'session',
  keys: ['helloworld'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use('login', new LocalStrategy((username, password, done) => {
  const authenticated = username === "John" && password === "Smith";

  if (authenticated) {
    return done(null, { myUser:'user', myID: 1234 });
  } else {
    return done(null, false);
  }
}));

app.post('/login', passport.authenticate('login', {
  successRedirect: '/success',
  failureRedirect: '/login'
}));

app.get('/success', (req, res) => {
  if (!req.isAuthenticated()) {// Denied. Redirect to login
    console.log('DEEEnied')
    res.redirect('/login');
  } else {
    res.send('Hey, hello from the server!');
  }
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out!');
});

app.listen(8000)
