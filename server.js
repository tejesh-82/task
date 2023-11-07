const express = require('express');
const app = express();

const header = (req, res, next) => {
  const header = req.headers['authorization'];
  const region = req.headers['region'];
  if (!header || region !== 'INDIA') {
      return res.status(403).send('Access denied');
  }
  next(); 
};

app.get('/timeofday2',header ,(req, res) => {
    
    const currentTime = new Date().toLocaleTimeString();
    res.send(`current server time is: ${currentTime}`);
});

const words=["tejesh","shiva","naresh","priya","ajay","nani"]

app.get('/wordofday',header, (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const header = req.headers['authorization'];
    const region = req.headers['region'];
    if (!header || region !== 'INDIA') {
      return res.status(403).send('access denied');
    }
    res.send(`random word is: ${randomWord}`);
});

app.listen(4000, () => {
  console.log('server running');
});
 