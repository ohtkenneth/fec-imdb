const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fMDB');

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected to mongodb instance');
});

module.exports = mongoose;