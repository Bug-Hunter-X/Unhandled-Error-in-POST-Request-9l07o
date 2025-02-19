const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body || !req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  const user = req.body;
  console.log(user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server started'));