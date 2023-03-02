import SpeedrunCard from './SpeedrunCard';

const SpeedrunList = ({ speedruns }) => {
  return (
    <div id="speedrun-cards" className="container p-2">
      <SpeedrunCard speedruns={speedruns} />
    </div>
  )
};

export default SpeedrunList;