const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (req, res) => {
  res.send('GET request received');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('PUT request received');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
