const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // Ensure correct import
const { getUserProfile } = require('../controllers/userController'); // Separate controller for profile

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, getUserProfile); // Now using a separate controller

module.exports = router;
