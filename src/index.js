// src/index.js
const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
