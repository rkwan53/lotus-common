const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = require('../.env');
let mongodb;

function connect(callback) {
  mongoClient.connect(mongoDbUrl, (err, db) => {
    mongodb = db;
    callback();
  });
}
function get() {
  return mongodb;
}

function close() {
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close,
};
