// src/index.js
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB (optional for this task, but keeping it for completeness)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
