import { useContext } from 'react';
import { SpeedrunContext } from '../../context/SpeedrunContext';

const Game = () => {
  const speedruns = useContext(SpeedrunContext);

  // Wrap img, info, and buttons into their own div, and have the video in its own div
  // Change order when screen shrinks and cols are stacked(?)
  return (
    <div className="row">
      {speedruns &&
        speedruns.filter((speedrun) => speedrun.game.title === 'Donkey Kong Country 3').map((speedrun) => {
          return <>
            <div className="col-12 col-md-5">
              <div className="row d-flex justify-content-center">
                <div key={speedrun._id} id="game-img-col" className="col-5 col-sm-3 col-md-4 col-xl-5">
                  <img src={speedrun.game.image} id="game-img" className="img-fluid"></img>
                </div>
                <div id="game-info-col" className="col-7 col-sm-5 col-md-8 col-xl-7">
                  <div>
                    <h4>{speedrun.game.title}</h4>
                    <p className="supplemental-text mb-2">{speedrun.game.platform}, {speedrun.game.release_year}</p>
                    <p className="game-info-item">Category: <span className="supplemental-text">{speedrun.category}</span></p>
                    <p className="game-info-item">Personal Best: <span className="supplemental-text">{speedrun.personal_best}</span></p>
                    <p className="game-info-item">Date Achieved: <span className="supplemental-text">{speedrun.date_played}</span></p>
                    <p className="game-info-item">Current Standing: <span className="supplemental-text">{speedrun.current_placement}</span></p>
                    <p className="game-info-item">Goal Time: <span className="supplemental-text">{speedrun.goal}</span></p>
                    <p className="game-info-item">World Record: <span className="supplemental-text">{speedrun.world_record}</span></p>
                  </div>
                </div>               
                <div className="col-12 col-sm-12 col-md-12 mt-2 mt-xl-4 d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    <select id="category-form" class="form-select form-select-sm" aria-label="Default select example">
                      <option selected>{speedrun.category}</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button type="button" className="btn btn-light details-btn mt-2">Go Back</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="game-video" className="col-12 col-md-7 mt-2 mt-md-0 d-flex align-items-center">
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/pkJHFPva_vM" id="video" title="Personal Best" allowFullScreen></iframe>
              </div>
            </div>
          </>
        })}
    </div>
  )
};

export default Game;


// Desired formats

// https://player.twitch.tv/?video=v1709711655&parent=localhost&autoplay=false
// https://youtube.com/embed/7nzeK7RBURw

// Options

// Youtube
// https://youtu.be/7nzeK7RBURw
// https://www.youtube.com/watch?v=pkJHFPva_vM

// Twitch
// https://www.twitch.tv/videos/1502109010

// Note: the only defining feature of these URLs is the id - find a way to extract the id and just add that into the ideal string template