// Function for converting the date received from the Speedrun.com API
function formatDate(date) {
  const _date = new Date(date);
  return `${_date.getMonth() + 1}/${_date.getDate()}/${_date.getFullYear()}`;
};

// Function for converting pb time from seconds to hh:mm:ss.ms accordingly
function formatPB(pb) {
  // Converting pb from seconds to hh:mm:ss.ms
  let formattedPB = new Date(pb * 1000).toISOString().slice(12,23);

  // If the pb does not have ms specified, truncate the ms
  if (formattedPB.slice(7,11) == '.000') {
    formattedPB = formattedPB.substring(0,7)
  }

  // If the pb is <10 mins, truncate the tens place for the mins. Else if the pb is less than an hour long, truncate the hours completely.
  if (formattedPB.slice(0,3) == '0:0') {
    formattedPB = formattedPB.slice(3);

  } else if (formattedPB.slice(0,2) == '0:') {
    formattedPB = formattedPB.slice(2);
  }

  return formattedPB;
};

// Function for formatting placements (e.g. 1 -> 1st, 2 -> 2nd, etc)
function formatPlacement(placement) {
  let result;
  let placementString = placement.toString();

  if (placementString.slice(-1) === '1' && placementString.length === 1 || placementString.slice(-1) === '1' && placementString.length != '1' && placementString.slice(-2, -1) != '1') {
    result = placementString.concat('st');
    return result;

  } else if (placementString.slice(-1) === '2' && placementString.slice(-2, -1) != '1') {
    result = placementString.concat('nd');
    return result;

  } else if (placementString.slice(-1) === '3' && placementString.slice(-2, -1) != '1') {
    result = placementString.concat('rd');
    return result;

  } else {
    result = placementString.concat('th');
    return result;
  } 
};

// Function for taking the category id from the Speedrun.com API and using that to populate the array with the respective data
function processSpeedrunData(data, games, speedrunData) {
  for (let i = 0; i < data.data.length; i++) {
    switch(data.data[i].run.category) {
      // Using known category ids from API to populate each individual speedrun object
      case 'jdrq07lk':
        speedrunData.push(
          {
            game: games[0]._id,
            category: 'All Stages',
            main_category: false,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '30:49',
            goal: '30:XX'
          }
        )
        break;

      case 'wkpomv02':
        speedrunData.push(
          {
            game: games[0]._id,
            category: 'No Major Glitches',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '33:59',
            goal: '33:5X'
          }
        )
        break;

      case 'zdnw31xd':
        speedrunData.push(
          {
            game: games[0]._id,
            category: 'Any%',
            main_category: false,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '7:28.883',
            goal: '7:29'
          }
        )
        break;

      case 'mkez0znk':
        speedrunData.push(
          {
            game: games[0]._id,
            category: 'No Major Skips',
            main_category: false,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '40:23',
            goal: '40:2X'
          }
        )
        break;

      case 'q25op7gk':
        speedrunData.push(
          {
            game: games[0]._id,
            category: '101%',
            main_category: false,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '44:48',
            goal: '44:XX'
          }
        )
        break;

      case 'xd1rx7wk':
        speedrunData.push(
          {
            game: games[1]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '37:48',
            goal: '38:2X'
          }
        )
        break;

      case '02qgxl9d':
        speedrunData.push(
          {
            game: games[2]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '45:46',
            goal: '46:XX'
          }
        )
        break;

      case 'zd37zv2n':
        speedrunData.push(
          {
            game: games[3]._id,
            category: 'Warpless',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '1:40:53',
            goal: '1:42:XX'
          }
        )
        break;

      case '9kvxpl32':
        speedrunData.push(
          {
            game: games[4]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '32:26',
            goal: '32:XX'
          }
        )
        break;

      case 'wk614yqd':
        speedrunData.push(
          {
            game: games[5]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '39:15',
            goal: '39:3X'
          }
        )
        break;

      case 'jdr6w0d6':
        speedrunData.push(
          {
            game: games[6]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '14:53',
            goal: '14:4X'
          }
        )
        break;

      case 'wk6ppqod':
        speedrunData.push(
          {
            game: games[7]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '38:13',
            goal: '37:5X'
          }
        )
        break;

      case '9kvpw83k':
        speedrunData.push(
          {
            game: games[8]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '29:15',
            goal: 'WR'
          }
        )
        break;

      case '7dgw5724':
        speedrunData.push(
          {
            game: games[9]._id,
            category: 'Any%',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '32:39',
            goal: 'N/A'
          }
        )
        break;

      case 'xd1rlo4k':
        speedrunData.push(
          {
            game: games[10]._id,
            category: 'Any% Dino [JP]',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '42:51',
            goal: '42:XX'
          }
        )
        break;

      case 'vdooneyd':
        if (data.data[i].run.values.jlzk27xl == '4qyx8y4l') {
          speedrunData.push(
            {
              game: games[11]._id,
              category: 'Easy Street - Perfect Delivery',
              main_category: true,
              personal_best: formatPB(data.data[i].run.times.primary_t),
              date_played: formatDate(data.data[i].run.date),
              current_placement: formatPlacement(data.data[i].place),
              video: data.data[i].run.videos.links[0].uri,
              world_record: '10:02.983',
              goal: 'N/A'
            }
          )
        } else if (data.data[i].run.values.jlzk27xl == 'mlnyk001') {
          speedrunData.push(
            {
              game: games[11]._id,
              category: 'Easy Street - Non-perfect Delivery',
              main_category: false,
              personal_best: formatPB(data.data[i].run.times.primary_t),
              date_played: formatDate(data.data[i].run.date),
              current_placement: formatPlacement(data.data[i].place),
              video: data.data[i].run.videos.links[0].uri,
              world_record: '10:15.617',
              goal: '<10:02.983'
            }
          )
        }    
        break;

      case 'wkporwg2':
        speedrunData.push(
          {
            game: games[11]._id,
            category: 'Middle Road - Non-perfect Delivery',
            main_category: false,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '11:26.050',
            goal: 'N/A'
          }
        )
        break;

      case '7dg9nxk4':
        speedrunData.push(
          {
            game: games[12]._id,
            category: 'Gym Leader Castle Round 1',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '1:32:52',
            goal: 'N/A'
          }
        )
        break;

      case 'xd17lrd8':
        speedrunData.push(
          {
            game: games[13]._id,
            category: 'Gym Leader Castle Round 1',
            main_category: true,
            personal_best: formatPB(data.data[i].run.times.primary_t),
            date_played: formatDate(data.data[i].run.date),
            current_placement: formatPlacement(data.data[i].place),
            video: data.data[i].run.videos.links[0].uri,
            world_record: '2:03:27',
            goal: 'N/A'
          }
        )
        break;
    }
  }
  return speedrunData;
};

module.exports = { processSpeedrunData };
