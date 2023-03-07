import { useContext } from 'react';
import { SpeedrunContext } from '../../context/SpeedrunContext';

const Plans = () => {
  const speedruns = useContext(SpeedrunContext);

  return (
    <div className="col-12 col-lg-6 col-xxl-12">
      {speedruns &&
        speedruns.filter((plannedSpeedrun) => plannedSpeedrun.category === 'No Major Glitches').map((plannedSpeedrun) => {
          return <div key={plannedSpeedrun._id} id="plans" className="card mt-3 bg-darker-tp">
            <h2 className="card-h2 text-center">Speedrun Plans</h2>
            <div className="row">
              <div className="latest-plans-img-col col-5 col-sm-3 col-md-2 col-lg-4 col-xl-3 col-xxl-12">
                <img src={plannedSpeedrun.game.image} className="img-fluid latest-plans-img" alt="Box art for the next speedrun I will do" />
              </div>
              <div className="latest-plans-info-col col-7 col-sm-9 col-md-10 col-lg-8 col-xl-9 col-xxl-12">
                <div className="card-body left-panel-card-body">
                  <p className="card-text">The next project I have planned is {plannedSpeedrun.game.title} - {plannedSpeedrun.category}. The goal here has been to get a {plannedSpeedrun.goal} for a while now, so I'm hoping to do that during this upcoming grind. My interests tend to change quite rapidly though, so there's no guarantee I'll be running this next.</p>
                </div>
              </div>
            </div>
          </div>
        })}    
    </div>
  )
};

export default Plans;
