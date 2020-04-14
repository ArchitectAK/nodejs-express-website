const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (request, response) => {
    const feedabck = await feedbackService.getList();
    return response.json(feedabck);
  });

  router.post('/', (request, response) => {
    response.send('Feedback form posted');
  });

  return router;
};
