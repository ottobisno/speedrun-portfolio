import { useContext } from 'react';
import { SpeedrunContext } from '../../context/SpeedrunContext';

const Game = ({ currentGame, handlePageChange }) => {
  const speedruns = useContext(SpeedrunContext);

  return (
    <div className="row">
      {/* Displaying info for the game whose button was clicked */}
      {speedruns &&
        speedruns.filter((speedrun) => speedrun._id === currentGame).map((speedrun) => {
          return <>
            <div key={speedrun._id} className="col-12 col-md-5">
              <div className="row d-flex justify-content-center">
                <div id="game-img-col" className="col-5 col-sm-3 col-md-4 col-xl-5">
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
                <div id="game-cat-col" className="col-12 mt-2 mt-xl-4 d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column align-items-center">
                    {/* Drop-down menu populated with each game's categories */}
                    <select id="category-form" className="form-select form-select-sm" aria-label="Default select example" onChange={(event) => handlePageChange(event.target.value)}>
                      {speedruns &&
                        speedruns.filter((run) => run.game.title === speedrun.game.title && run.game.platform === speedrun.game.platform).map((run) => {
                          return <option key={run._id} value={run._id}>{run.category}</option>
                        })}                             
                    </select>
                    <button type="button" className="btn btn-light details-btn mt-2" onClick={() => handlePageChange('List')}>Go Back</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="game-video-col" className="col-12 col-md-7 mt-2 mt-md-0 d-flex align-items-center">
              <div className="ratio ratio-16x9">
                <iframe src={speedrun.video} id="video" title="Personal Best" allowFullScreen></iframe>
              </div>
            </div>
          </>
        })}
    </div>
  )
};

export default Game;
