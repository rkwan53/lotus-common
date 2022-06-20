const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
  savedJoke: { type: String, required: true }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
