const mongoose = require('mongoose');

const { Schema } = mongoose;

const speedrunSchema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  category: {
    type: String,
    required: true
  },
  main_category: {
    type: Boolean,
    required: true
  },
  personal_best: {
    type: String,
    required: true
  },
  date_played: {
    type: String,
    required: true
  },
  current_placement: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  world_record: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  }
});

const Speedrun = mongoose.model('Speedrun', speedrunSchema);

module.exports = Speedrun;
