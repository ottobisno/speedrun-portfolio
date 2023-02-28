const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    game_title: {
        type: String,
        required: true,
    },
    game_release_date: {
        type: Date,
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
