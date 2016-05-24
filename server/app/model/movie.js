const mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    name: String
});

movieSchema.methods.speak = function () {
  var greeting = this.name ? "Movie name is " + this.name : "I don't have a name";
  console.log(greeting);
};

module.exports = mongoose.model('Movie', movieSchema);