const express = require('express');

const speakesRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: ' Welcome' });
  });

  router.use('/speakers', speakesRoutes(params));
  router.use('/feedback', feedbackRoutes(params));

  return router;
};
