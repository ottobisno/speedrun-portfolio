const db = require('./connection');
const { Game, Speedrun } = require('../models');
const fetch = require('node-fetch');
const gameData = require('./seeders/gameData.json');
const { processSpeedrunData } = require('../utils/conversion');

// Defining empty array to hold the processed speedrunData from the Speedrun.com API
let speedrunData = [];

// Rewrite this to be db.once etc if you can do it all in one function
db.once('open', async () => {
  
  // Clearing out any existing documents
  await Game.deleteMany({});
  await Speedrun.deleteMany({});

  // Populating database with game data
  const games = await Game.create(gameData);

  // Fetching data from the Speedrun.com API to populate speedrun data
  try {
    const response = await fetch('https://www.speedrun.com/api/v1/users/SilentWolf/personal-bests', {
      method: 'GET',
      headers: {
        'Host': 'www.speedrun.com',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    processSpeedrunData(data, games, speedrunData);

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  // Populating the database with the processes speedrun data
  await Speedrun.create(speedrunData)

  console.log('The database has been seeded~');
  process.exit(0);
});
