const mongoose = require('mongoose');
const config = require('../config/config');
console.log(config);
let { host, port, name } = config.db;

const connectWithRetry = () => {
  console.log(`MongoDB connecting with retry after 3 sec to mongodb://${host}:${port}/${name}`);
  mongoose.connect(`mongodb://${host}:${port}/${name}`)
    .then(() => console.log(`connected to mongodb instance at mongodb://${host}:${port}/${name}`))
    .catch(err => {
      console.log('Connection to mongodb unsuccessful, retry after 3 seconds.');
      setTimeout(connectWithRetry, 3000);
    });
};

connectWithRetry();

// mongoose.connect(`mongodb://${host}:${port}`);
// mongoose.connect('mongodb://localhost/fMDB');

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log(`connected to mongodb instance at mongodb://${host}:${port}/${name}`);
// });

module.exports = mongoose;