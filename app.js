const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Import routes
const chatRoutes = require('./routes/chat');
const loginRoutes = require('./routes/login');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use(chatRoutes);
app.use(loginRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
