// Placeholder images
import placeholderBoxArt from '../../img/other/portrait.jpg';

const Latest = () => {
  return (
    <div id="latest-run" className="card mt-3 bg-darker-tp col-12 col-sm-4 col-xxl-12 order-2 order-sm-1 order-xxl-2">
      <h2 className="card-h2 text-center">Latest Speedrun</h2>
      <img src={placeholderBoxArt} className="img-fluid border-bot" alt="Box art for the last speedrun I have done" />
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
      </div>
    </div>
  )
};

export default Latest;
