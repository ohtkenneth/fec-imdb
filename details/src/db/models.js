const db = require('./db');

const Schema = db.Schema;

const MovieSchema = new Schema({
  id: Number,
  title: String,
  cast: Array,
  photos: Array,
  // STORY LINE
  storyline: String,
  plotKeyWords: Array,
  taglines: String,
  genres: Array,
  movieRating: String,
  // DETAILS
  officialSites: Array,
  country: String,
  languages: Array,
  releaseDate: String,
  aKa: String,
  filmingLocations: Array,
  // BOX OFFICE
  budget: String,
  openingWeekend: String,
  gross: String,
  cumulative: String,
  // CREDITS
  productionCo: Array,
  runtime: String,
  soundMix: String,
  color: String,
  aspectRatio: String,
  // DID YOU KNOW
  trivia: String,
  goofs: String,
  quotes: String,
  crazyCredits: String, 
  connections: String,
  soundtracks: Array,
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