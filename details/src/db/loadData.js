const db = require('./db');

const movies = require('./fakeMovieData.json');
const Movie = require('./models').Movie;

// console.log(movies);
movies.forEach(movie => {
  Movie.create(movie, (err, result) => {
    if (err) throw err;
    console.log(result);

    db.connection.close();
  });
  // console.log('movie')
});