const express = require('express');

const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('route for API');
});

// some other endpoints to submit data

module.exports = router;
