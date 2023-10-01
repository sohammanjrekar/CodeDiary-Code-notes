// authController.js
const User = require('../models/User');
const passport = require('passport');

// Example controller functions
const registerUser = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username });

  User.register(newUser, password, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Error registering user' });
    }

    passport.authenticate('local')(req, res, () => {
      res.json({ success: true, user });
    });
  });
};

const loginUser = passport.authenticate('local');

const logoutUser = (req, res) => {
  req.logout();
  res.json({ success: true });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
