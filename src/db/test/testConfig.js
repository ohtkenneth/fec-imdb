const mongoose = require('mongoose');
const { Movie, MovieReview } = require('../models');

module.exports = {
  mongoose,
  connect: (done) => {
    return mongoose.connect('mongodb://localhost/fMDB')
      .then(() => Movie.deleteMany({}))
      .then(() => MovieReview.deleteMany({}))
      .then(() => done());
  },
  disconnect: (done) => {
    return mongoose.disconnect(done);
  }
}