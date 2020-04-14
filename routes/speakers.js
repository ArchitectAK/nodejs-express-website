const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.send('Speakers List');
  });

  router.get('/:shortname', (request, response) => {
    response.send(`Deatil Page of ${request.params.shortname}`);
  });

  return router;
};
