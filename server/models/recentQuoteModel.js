const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentQuotesSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: false },
});

module.exports = mongoose.model('recentQuotes', recentQuotesSchema);
