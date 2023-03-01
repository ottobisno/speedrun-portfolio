const { Game, Speedrun } = require('../models');

const resolvers = {
    Query: {
        games: async () => {
            return await Game.find({});
        },
        speedruns: async () => {
            return await Speedrun.find({}).populate('game');
        },
        game: async (parent, { _id }) => {
            return await Game.findById(_id);
        },
        speedrun: async (parent, { _id }) => {
            return await Speedrun.findById(_id).populate('game');
        }
    }
};

module.exports = resolvers;
