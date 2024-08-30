const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const educationRoutes = require('./routes/educationRoutes');
const skillRoutes = require('./routes/skillRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const messageRoutes = require('./routes/messageRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const allDataRoute = require('./routes/allDataRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api', allDataRoute);

// Add other routes...

module.exports = app;
