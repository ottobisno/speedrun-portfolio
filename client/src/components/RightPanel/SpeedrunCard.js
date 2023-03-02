
const SpeedrunCard = ({ speedruns }) => {
  return (
    <div className="row gy-4">
      {speedruns &&
        speedruns.map((speedrun) => {
          if (speedrun.main_category) {
            return <div key={speedrun._id} className="col-12 col-sm-6 col-md-4 col-xl-6">
              <div className="card bg-darker">
                <div className="row gy-0 gx-1 align-items-center">
                  <div className="col-12 col-xl-4">
                    <img src={speedrun.game.image} className="img-fluid border-run-card rounded-run-card" alt="Video game box art" />
                  </div>
                  <div className="col-12 col-xl-8">
                    <div className="card-body d-flex flex-column">
                      <h4>{speedrun.game.title}</h4>
                      <p className="supplemental-text">{speedrun.game.platform}, {speedrun.game.release_year}</p>
                      <div className="game-info">
                        <p>Main Category: <span className="supplemental-text">{speedrun.category}</span></p>
                        <p>Personal Best: <span id="dkc-pb">{speedrun.personal_best}</span></p>
                        <p>Date Achieved: <span id="dkc-pb-date">{speedrun.date_played}</span></p>
                        <p>Current Standing: <span id="dkc-standing">{speedrun.current_placement}</span></p>
                      </div>
                      <button id="dkc-btn" type="button" className="btn btn-light">More Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
      })}
    </div>
  )
};

export default SpeedrunCard;
