const db = require('../db');
const movies = require('../mockdata/mockMovieData.json');
const reviews = require('../mockdata/mockMovieReviewData.json');
const { Movie, MovieReview } = require('../models');

Movie.insertMany(movies, (err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Movie insert done!');
    MovieReview.insertMany(reviews, (err, docs) => {
      if (err) throw err;
    
      console.log('Review insert done!');
      db.connection.close();
    });
  }
});

