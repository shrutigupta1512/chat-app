const express = require('express');
const router = express.Router();

// Serve the login form
router.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Enter your username" required />
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle login form submission
router.post('/login', (req, res) => {
  const username = req.body.username;
  res.redirect('/?username=' + encodeURIComponent(username));
});

module.exports = router;
