const db = require('./db');
const { MovieSchema, MovieReviewSchema } = require('./Schema');

const Movie = db.model('Movie', MovieSchema);
const MovieReview = db.model('MovieReview', MovieReviewSchema);

async function createMovie(movieData) {
  try {
    const result = await Movie.create(movieData);
    return result;
  } catch(err) {
    return err;
  }
}

async function deleteMovie(movieId) {
  try {
    const result = await Movie.deleteOne({ id : movieId });
    return result;
  } catch(err) {
    return err;
  }
}

async function getMovie(movieId) {
  // find movie by id 
  try {
    const result = await Movie.findOne({ id: movieId });
    return result;
  } catch(err) {
    return err;
  }
}

async function editMovie(movieId, section, text) {
  //
  try {
    const result = await Movie.findOneAndUpdate({ id: movieId }, {
      [section]: text
    }, { new: true });
    return result;
  } catch(err) {
    return err;
  }
}

async function createMovieReview(movieReviewData) {
  try {
    const result = await MovieReview.create(movieReviewData);
    return result;
  } catch(err) {
    return err;
  }
};

async function getMovieReview(reviewId) {
  try {
    const result = await MovieReview.findOne({ id: reviewId });
    return result;
  } catch(err) {
    return err;
  }
}

async function deleteMovieReview(reviewId) {
  try {
    const result = await MovieReview.deleteOne({id: reviewId });
    return result;
  } catch(err) {
    return err;
  }
}

module.exports = {
  Movie,
  MovieReview,
  createMovie,
  deleteMovie,
  getMovie,
  editMovie,
  getMovieReview,
  createMovieReview,
  deleteMovieReview,
};