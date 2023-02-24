const mongoose = require('mongoose');

const { Schema } = mongoose;

const speedrunSchema = new Schema({
    game_title: {
        type: String,
        required: true,
    },
    game_release_date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    personal_best: {
        type: String,
        required: true
    },
    date_played: {
        type: Date,
        required: true
    },
    current_placement: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required: true
    }
});

const Speedrun = mongoose.model('Speedrun', speedrunSchema);

module.exports = Speedrun;