const express = require('express');
const app = express();

function sayHello(req, resp, next) {
  console.log('I must be called');
  next();
}

app.get('/', sayHello, (req, resp) => {
  resp.send('Hello world');
});

// Bind the server to a port(8000)
app.listen(8000, () => console.log('express server started at port 8000'));
