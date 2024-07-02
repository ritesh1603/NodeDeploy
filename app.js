const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hello', (req, res) => {
  res.send('Hey its Ritesh from Node.js!');
});

app.listen(port, () => {
  console.log(`Baic Node app listening at http://localhost:${port}`);
});
