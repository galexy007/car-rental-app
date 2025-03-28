const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Test route to check if auth routes are working
router.get('/test', (req, res) => {
    res.json({ message: "Auth routes working" });
});

// Protected route example
router.get('/profile', protect, (req, res) => {
    res.json({ message: "Welcome to your profile", userId: req.user });
});

module.exports = router;
