const express = require('express');
const fs = require('fs');
const router = express.Router();

let messages = [];  // To store messages temporarily

// Serve the chat page
router.get('/', (req, res) => {
  const username = req.query.username || 'Guest';
  let chatHistory = messages.length > 0 
    ? messages.map(m => `<p>${m.username}: ${m.message}</p>`).join('') 
    : '<p>No chats exist</p>';

  res.send(`
    ${chatHistory}
    <form action="/send-message" method="POST">
      <input type="text" name="message" placeholder="Type your message" required />
      <input type="hidden" name="username" value="${username}" />
      <button type="submit">Send</button>
    </form>
  `);
});

// Handle message submission
router.post('/send-message', (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  // Add new message to the array
  const chat = { username, message };
  messages.push(chat);

  // Optionally save to a file for persistence
  fs.writeFileSync('messages.json', JSON.stringify(messages));

  // Redirect back to chat
  res.redirect('/?username=' + encodeURIComponent(username));
});

module.exports = router;
