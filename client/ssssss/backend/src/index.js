const express = require('express');
const bodyParser = require('body-parser');
const { dbConnect } = require('../config/DbConnection'); // Adjust the path if needed
require('dotenv').config(); // Ensure dotenv is loaded before accessing process.env

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
dbConnect();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
