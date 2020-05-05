const express = require('express');

const speakesRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const artwork = await speakerService.getAllArtwork();
    const topSpeakers = await speakerService.getList();
    response.render('layout', { pageTitle: ' Welcome', template: 'index', topSpeakers, artwork });
  });

  router.use('/speakers', speakesRoutes(params));
  router.use('/feedback', feedbackRoutes(params));

  return router;
};
