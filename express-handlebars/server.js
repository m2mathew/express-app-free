const express = require('express');
const hbs = require('express-handlebars').create({ defaultLayout: 'main.hbs' });
const app = express();

// setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, resp) => {
  resp.render('home', { title: 'Home' });
});

app.get('/about', (req, resp) => {
  resp.render('about', { title: 'About' });
});

app.listen(8000, () => console.log('express be started up over on that 8000 port'));
