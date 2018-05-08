const express = require('express');

const app = express();

// requiring the basic_router.js
app.use('/users', require('./basic_router'));

app.use('/api', require('./api_route'));

// routes
app.get('/posts/newpost', (req, resp) => {
  resp.send('new post');
});

app.listen(8000, () => console.log('Express server has beginnned at port 8000'));
