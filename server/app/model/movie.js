const mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    title: String,
    description: String,
    slug: { type: String, slug: "title", unique: true },
    cover: {
        url: String,
        alt: String
    },
    vote: { type: Number, min: 0 , max: 10 },
    date_release: Date,
    published: Boolean
});

// movieSchema.methods.speak = function () {
//   var greeting = this.name ? "Movie name is " + this.name : "I don't have a name";
//   console.log(greeting);
// };

module.exports = mongoose.model('Movie', movieSchema);