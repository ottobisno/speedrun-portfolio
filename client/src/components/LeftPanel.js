import portrait from '../img/other/portrait.jpg';
// Placeholder images
import placeholderBoxArt from '../img/box-art/dkc-box-art.png';

const LeftPanel = () => {
  return (
    <div id="left-panel" className="col-12 col-xxl-2 order-1">
      <div className="container-fluid px-0">
        <div className="row justify-content-between gx-0">
          <div id="about-me" className="card mt-3 bg-darker-tp col-12 col-sm-3 col-xxl-12 order-1 order-sm-2 order-xxl-1">
            <h2 className="card-h2 text-center">About Me</h2>
            <img src={portrait} className="img-fluid border-bot" alt="An image of myself" />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
            </div>
          </div>
          <div id="latest-run" className="card mt-3 bg-darker-tp col-12 col-sm-4 col-xxl-12 order-2 order-sm-1 order-xxl-2">
            <h2 className="card-h2 text-center">Latest Speedrun</h2>
            <img src={placeholderBoxArt} className="img-fluid border-bot" alt="Box art for the last speedrun I have done" />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
            </div>
          </div>
          <div id="plans" className="card mt-3 bg-darker-tp col-12 col-sm-4 col-xxl-12 order-3">
            <h2 className="card-h2 text-center">Speedrun Plans</h2>
            <img src={placeholderBoxArt} className="img-fluid border-bot" alt="Box art for the next speedrun I will do" />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LeftPanel;