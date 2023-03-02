import portrait from '../../img/other/portrait.jpg';

const About = () => {
  return (
    <div id="about-me" className="card mt-3 bg-darker-tp col-12 col-sm-3 col-xxl-12 order-1 order-sm-2 order-xxl-1">
      <h2 className="card-h2 text-center">About Me</h2>
      <img src={portrait} className="img-fluid border-bot" alt="Myself" />
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit dolorum vel, iusto quod maiores ea ratione reprehenderit dignissimos repellendus ipsum, inventore distinctio rem quaerat est excepturi. Necessitatibus, esse aliquid!</p>
      </div>
    </div>
  )
};

export default About;
