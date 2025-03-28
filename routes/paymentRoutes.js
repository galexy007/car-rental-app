const express = require('express');
const router = express.Router();

// Import payment controller (if applicable in the future)
// const { processPayment } = require('../controllers/paymentController');

// Example payment route
router.get('/test', (req, res) => {
    res.json({ message: "Payment routes working" });
});

// Future route for processing payments (uncomment and modify as needed)
// router.post('/process', processPayment);

module.exports = router;