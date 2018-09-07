const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const db = require('../db/db');
const models = require('../db/models');

const app = express();
const logger = morgan('dev');
const PORT = process.env.PORT || 1337;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, '/../../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../dist/index.html'));
});

app.get('/api/movie/:movieId', (req, res) => {
  // console.log(req.params);
  // res.send('send back movie page');
  
  models.getMovie(req.params.movieId)
  .then(result => res.send(JSON.stringify(result)))
  .catch(err => res.send(JSON.stringify(err)));
});

app.listen(PORT, () => {
  console.log('FMDB listening on ' + PORT);
});
