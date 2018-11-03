require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const models = require('../db/models');

const app = express();
const logger = morgan('dev');

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, '/../../dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/movie/:movieId', (req, res) => {
  const { movieId } = req.params;

  models.getMovie(movieId)
    .then(result => {
      res.send(JSON.stringify(result));
    })
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

  models.getMovieReview(reviewId)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(JSON.stringify(err));
    });
});

module.exports = app;