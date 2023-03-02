// Placeholder images
import placeholderBoxArt from '../../img/other/portrait.jpg';

const Plans = () => {
  return (
    <div id="plans" className="card mt-3 bg-darker-tp col-12 col-sm-4 col-xxl-12 order-3">
      <h2 className="card-h2 text-center">Speedrun Plans</h2>
      <img src={placeholderBoxArt} className="img-fluid border-bot" alt="Box art for the next speedrun I will do" />
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
      </div>
    </div>
  )
};

export default Plans;
