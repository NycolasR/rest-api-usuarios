const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting the app
const app = express();

// Allowing JSON at the aplication
app.use(express.json());

// Allowing access from every domains
app.use(cors());

// Starting the database
mongoose.connect(
    'mongodb://localhost:27017/users_api',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Requiring the models
requireDir('./src/models');

// Routes
app.use('/api_users', require('./src/routes'));

app.listen(3001);
