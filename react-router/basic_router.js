const express = require('express'),
      router = express.Router();

// making use of normal routes
router.get('/john', (request,response) => {
  response.send('Home of user john');
});

router.get('/mark', (request,response) => {
  response.send('Home of user mark');
});

// exporting the router to other modules
module.exports = router;
