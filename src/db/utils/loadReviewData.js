const { Review } = require("./model.js");
const { movies } = require("./data.js");
const { db } = require("./index.js");

// insertInDB(movies);
Review.insertMany(movieReviews, (err, docs) => {
  if (err) throw err;

  console.log('done!');
  db.connection.close();
});
