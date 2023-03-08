import { useContext } from 'react';
import { SpeedrunContext } from '../../context/SpeedrunContext';

const SpeedrunList = ({ handlePageChange }) => {
  const speedruns = useContext(SpeedrunContext);

  return (
    <div className="container p-2">
      <div className="row gy-4 justify-content-center">
        {speedruns &&
          speedruns.map((speedrun) => {
            if (speedrun.main_category) {
              return <div key={speedrun._id} className="sr-list-card-div col-12 col-sm-6 col-md-4 col-lg-6">
                <div className="card sr-list-card bg-darker">
                  <div className="row gy-0 gx-1 align-items-center">
                    <div className="sr-img-col col-5 col-sm-12 col-lg-5 col-xl-4">
                      <img src={speedrun.game.image} className="img-fluid sr-list-card-img" alt="Video game box art" />
                    </div>
                    <div className="sr-info-col col-7 col-sm-12 col-lg-7 col-xl-8">
                      <div className="card-body d-flex flex-column">
                        <h4 className="sr-list-game-title">{speedrun.game.title}</h4>
                        <p className="supplemental-text game-platform-year">{speedrun.game.platform}, {speedrun.game.release_year}</p>
                        <div className="sr-list-game-info">
                          <p className="list-info-item">Category: <span className="supplemental-text">{speedrun.category}</span></p>
                          <p className="list-info-item">Personal Best: <span className="supplemental-text">{speedrun.personal_best}</span></p>
                          <p className="list-info-item">Date Achieved: <span className="supplemental-text">{speedrun.date_played}</span></p>
                          <p className="list-info-item">Current Standing: <span className="supplemental-text">{speedrun.current_placement}</span></p>
                        </div>
                        <a type="button" className="btn btn-light details-btn" href="#my-speedruns" onClick={() => handlePageChange(speedrun._id)}>More Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          })}
      </div>
    </div>
  )
};

export default SpeedrunList;
