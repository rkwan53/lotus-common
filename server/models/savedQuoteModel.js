const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = process.env.currentURI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'starwars',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const savedQuoteSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: false},
});

module.exports = mongoose.model('savedQuote', savedQuoteSchema);
