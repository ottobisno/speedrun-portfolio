const { Game, Speedrun } = require('../models');

const resolvers = {
  Query: {
    games: async () => {
      return await Game.find({});
    },
    speedruns: async () => {
      return await Speedrun.find({}).populate('game');
    }
  }
};

module.exports = resolvers;
