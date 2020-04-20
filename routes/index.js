const express = require('express');

const speakesRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const topSpeakers = await speakerService.getList();
    console.log(topSpeakers);
    response.render('layout', { pageTitle: ' Welcome', template: 'index', topSpeakers });
  });

  router.use('/speakers', speakesRoutes(params));
  router.use('/feedback', feedbackRoutes(params));

  return router;
};
