const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentJokesSchema = new Schema({
  joke: { type: String, required: true },
});

module.exports = mongoose.model('recentJokes', recentJokesSchema);
