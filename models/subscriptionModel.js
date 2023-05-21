const mongoose = require('mongoose');

const SubscriptionsSchema = new mongoose.Schema({
  movieid : String,
  memberid : String,
  date : String,
 
})

module.exports = mongoose.model("subscriptions", SubscriptionsSchema);