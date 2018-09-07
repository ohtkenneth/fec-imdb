const db = require('./db');

const Schema = db.Schema;

const MovieSchema = new Schema({
  id: Number,
  title: String,
  cast: Array,
  photos: Array,
  storyline: String,
  plotKeyWords: Array,
  tagLines: String,
  genres: Array,
  movieRating: String,
  officialSites: Array,
  country: String,
  languages: Array,
  releaseDate: String,
  aKa: String,
  filmingLocations: Array,
});

const Movie = db.model('Movie', MovieSchema);

async function getMovie(movieId) {
  // find movie by id 
  console.log('FROM MODELS', movieId);
  try {
    const result = await Movie.findOne({ id: movieId });
    return result;
  } catch(err) {
    return err;
  }
};

module.exports = {
  Movie,
  getMovie,
};