const express = require('express');

const speakesRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: ' Welcome' });
  });

  router.use('/speakers', speakesRoutes());
  router.use('/feedback', feedbackRoutes());
  return router;
};
