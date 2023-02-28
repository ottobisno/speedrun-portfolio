const db = require('../config/connection');
const { Game, Speedrun } = require('../models');
const fetch = require('node-fetch');
const gameData = require('./gameData.json');
const { processSpeedrunData } = require('../utils/conversion');

// Rewrite this to be db.once etc if you can do it all in one function
db.once('open', async () => {
    // Populating database with game data
    await Game.deleteMany({});
    const games = await Game.create(gameData);

    // Defining empty array to hold the speedrunData that will be processed
    let speedrunData = [];

    // Fetching data from the speedrun.com API to populate speedrun data
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
        processSpeedrunData(data);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    await Speedrun.deleteMany({});
    await Speedrun.create(speedrunData)

    console.log('The database has been seeded!');
    process.exit(0);
});
