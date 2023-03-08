import SpeedrunList from './SpeedrunList';
import Game from './Game';
import { useState } from 'react';

const RightPanel = () => {
  // Creating a state variable to determine whether to show the speedrun list or a specific game
  const [currentGame, setCurrentGame] = useState('List');

  // Function to handle page changes
  const handlePageChange = (game) => setCurrentGame(game);

  // Function to render either the list of games or an individual game depending on the value of currentGame
  const renderPage = () => {
    if (currentGame === 'List') {
      return <SpeedrunList handlePageChange={handlePageChange} />
    } else {
        return <Game currentGame={currentGame} handlePageChange={handlePageChange} />
    }
  }

  return (
    <div id="right-panel" className="col-12 col-xxl-10">
      <div id="my-speedruns" className="card mt-3 bg-darker-tp">
        <h2 className="card-h2 text-center">My Speedruns</h2>
        <div className="card-body">
          {renderPage()}
        </div>
      </div>
    </div>
  )
};

export default RightPanel;
