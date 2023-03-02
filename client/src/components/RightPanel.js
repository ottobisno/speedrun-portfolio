import SpeedrunList from './SpeedrunList';

const RightPanel = () => {
  return (
    <div id="right-panel" className="col-12 col-xxl-10 order-2">
      <div id="mb-speedruns" className="card mt-3 bg-darker-tp">
        <h2 className="card-h2 text-center">My Speedruns</h2>
        <div className="card-body">
          <SpeedrunList />
        </div>
      </div>
    </div>
  )
};

export default RightPanel;
