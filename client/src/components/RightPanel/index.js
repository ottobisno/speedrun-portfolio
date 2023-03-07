import SpeedrunList from './SpeedrunList';
// Conditionally render a single speedrun if its button is clicked
// import SingleSpeedrun from './SingleSpeedrun';

const RightPanel = () => {
  return (
    <div id="right-panel" className="col-12 col-xxl-10">
      <div id="my-speedruns" className="card mt-3 bg-darker-tp">
        <h2 className="card-h2 text-center">My Speedruns</h2>
        <div className="card-body">
          <SpeedrunList />
          {/* <SingleSpeedrun /> */}
        </div>
      </div>
    </div>
  )
};

export default RightPanel;
