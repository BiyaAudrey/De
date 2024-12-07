const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });

   });

   app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });

   });

   const PORT = 3000;

   app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });

   });
  
  app.get('*', (req, res) => {
   res.status(404).render('index', { message: 'Not Found' });
   });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

   });