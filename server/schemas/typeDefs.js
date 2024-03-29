const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Game {
    _id: ID
    title: String
    release_year: String
    platform: String
    image: String
  }

  type Speedrun {
    _id: ID
    game: Game
    category: String
    main_category: Boolean
    personal_best: String
    date_played: String
    current_placement: String
    video: String
    world_record: String
    goal: String
  }

  type Query {
    games: [Game]
    speedruns: [Speedrun]
    game(_id: ID): Game
    speedrun(_id: ID): Speedrun
  }
`;

module.exports = typeDefs;
