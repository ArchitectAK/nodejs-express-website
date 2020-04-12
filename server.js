const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (Request, response) => {
  // response.sendFile(path.join(__dirname, './static/index.html'));
  response.render('pages/index', { pageTitle: ' Welcome' });
});
app.get('/speakers', (Request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
