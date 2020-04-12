const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (Request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});
app.get('/speakers', (Request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
