const mongoose     = require('mongoose');
const mongooseSlug = require('mongoose-slug-generator');

mongoose.plugin(mongooseSlug);

var movieSchema = mongoose.Schema({
    title: String,
    description: String,
    slug: { type: String, slug: "title", unique: true },
    cover: {
        url: String,
        alt: String
    },
    vote: { type: Number, min: 0 , max: 10 },
    release_date: Date,
    published: Boolean
});

module.exports = mongoose.model('Movie', movieSchema);