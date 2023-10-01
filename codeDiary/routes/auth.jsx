// auth.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const passport = require('passport');

// Routes for authentication
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);

// Example of protecting a route using isAuthenticated middleware
router.get('/protected-route', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'This is a protected route!' });
});

module.exports = router;
