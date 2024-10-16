window.onload = function() {
    const loginForm = document.querySelector('form[action="/login"]');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        const username = document.querySelector('input[name="username"]').value;
        localStorage.setItem('username', username);
      });
    }
  
    const messageForm = document.querySelector('form[action="/send-message"]');
  
    if (messageForm) {
      const username = localStorage.getItem('username');
      document.querySelector('input[name="username"]').value = username;
    }
  };
  