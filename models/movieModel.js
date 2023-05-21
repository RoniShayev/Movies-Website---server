const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name : String,
  yearpremiered : Number,
  genres : [String],
  image : String,
 
})

module.exports = mongoose.model("movies", MovieSchema);