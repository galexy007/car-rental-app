const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');  // Ensure auth routes exist
const rideRoutes = require('./routes/rideRoutes');  // Ensure ride routes exist

const app = express();

// Middleware
app.use(cors());  // Allow all origins (modify for production security)
app.use(express.json());  // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Support form data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);

// Default Route (for unknown endpoints)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
