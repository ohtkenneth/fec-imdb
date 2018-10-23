const mongoose = require('mongoose');
const { MovieDetail, MovieReview } = require('../models');

module.exports = {
  mongoose,
  connect: (done) => {
    return mongoose.connect('mongodb://localhost/test')
      .then(() => MovieDetail.deleteMany({}))
      .then(() => MovieReview.deleteMany({}))
      .then(() => done());
  },
  disconnect: (done) => {
    return mongoose.disconnect(done);
  }
};