const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;
  router.get('/', async (request, response) => {
    const speakers = await speakerService.getList();
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    response.send(`Deatil Page of ${request.params.shortname}`);
  });

  return router;
};
