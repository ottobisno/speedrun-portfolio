const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    release_year: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
