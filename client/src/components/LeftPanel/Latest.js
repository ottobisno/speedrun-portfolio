import { useContext } from 'react';
import { SpeedrunContext } from '../../context/SpeedrunContext';

const Latest = () => {
  const speedruns = useContext(SpeedrunContext);

  return (
    <div className="col-12 col-lg-6 col-xxl-12">
      {speedruns &&
        speedruns.filter((latestSpeedrun) => latestSpeedrun.category === 'Warpless').map((latestSpeedrun) => {
          return <div key={latestSpeedrun._id} id="latest-run" className="card mt-3 bg-darker-tp">
            <h2 className="card-h2 text-center">Latest Speedrun</h2>
            <div className="row">
              <div className="latest-plans-img-col col-5 col-sm-3 col-md-2 col-lg-4 col-xl-3 col-xxl-12">
                <img src={latestSpeedrun.game.image} className="img-fluid latest-plans-img" alt="Box art for the last speedrun I have done" />
              </div>
              <div className="latest-plans-info-col col-7 col-sm-9 col-md-10 col-lg-8 col-xl-9 col-xxl-12">
                <div className="card-body left-panel-card-body">
                  <p className="card-text">The latest speedrun I've' been working on is {latestSpeedrun.game.title} - {latestSpeedrun.category}. I managed to get a new PB of {latestSpeedrun.personal_best} during this grind, but unfortunately got sidetracked and didn't end up going all the way for my goal time of {latestSpeedrun.goal} before losing interest. I'll come back to this game eventually though.</p>
                </div>
              </div>
            </div>
          </div>
        })}
    </div>
  )
};

export default Latest;
