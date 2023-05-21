const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  name : String,
  email : String,
  city : String,
 
})

module.exports = mongoose.model("members", MembersSchema);