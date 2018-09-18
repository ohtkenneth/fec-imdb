require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const models = require('../db/models');

const app = express();
const logger = morgan('dev');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, '/../../dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

app.get('/api/movie/:movieId', (req, res) => {
  // res.send('send back movie page');
  const { movieId } = req.params;
  
  models.getMovie(movieId)
    .then(result => res.send(JSON.stringify(result)))
    .catch(err => res.send(JSON.stringify(err)));
});

// post route for section edits
app.post('/api/movie/:movieId', (req, res) => {
  const { movieId } = req.params;
  const { section, text } = req.body;

  models.editMovie(movieId, section, text)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/api/review/:reviewId', (req, res) => {
  const { reviewId } = req.params;

  console.log(reviewId);
  models.getMovieReview(reviewId)
    .then(result => {
      console.log(result);
      res.send(JSON.stringify(result));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify(err));
    });
});

module.exports = app;