// Placeholder images
import placeholderBoxArt from '../img/box-art/dkc-box-art.png';

const SpeedrunCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-6">
      <div id="dkc-card" className="card bg-darker">
        <div className="row gy-0 gx-1 align-items-center">
          <div className="col-12 col-xl-4">
            <img src={placeholderBoxArt} className="img-fluid border-run-card rounded-run-card" alt="Box art for Donkey Kong Country (SNES)" />
          </div>
          <div className="col-12 col-xl-8">
            <div className="card-body d-flex flex-column">
              <h4>Donkey Kong Country</h4>
              <p className="supplemental-text">SNES, 1994</p>
              <div className="game-info">
                <p>Main Category: <span className="supplemental-text">No Major Glitches</span></p>
                <p>Personal Best: <span id="dkc-pb"></span></p>
                <p>Date Last Ran: <span id="dkc-pb-date"></span></p>
                <p>Current Standing: <span id="dkc-standing"></span></p>
              </div>
              <button id="dkc-btn" type="button" className="btn btn-light">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SpeedrunCard;