import portrait from '../../img/other/portrait.jpg';

const About = () => {
  return (
    <div className="col-12 col-lg-12 col-xxl-12">
      <div id="about-me" className="card mt-3 bg-darker-tp">
        <h2 className="card-h2 text-center">About Me</h2>
        <div className="row">
          <div id="about-img-col" className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-12">
            <img src={portrait} id="about-img" className="img-fluid" alt="Myself" />
          </div>
          <div id="about-info-col" className="col-6 col-sm-7 col-md-8 col-lg-9 col-xl-10 col-xxl-12">
            <div id="about-img-card-body" className="card-body left-panel-card-body">
              <p className="card-text">My name is Otto (aka Silent Wolf) and you can typically find me speedrunning classic 2D platformers, primarily for the SNES. I grew up playing SNES games and as soon as I watched the TAS (tool-assisted speedrun) of DKC back in 2006, I was hooked on watching speedruns for games I had played growing up. It wasn't until 2011-2012 when I actually started doing speedruns myself, but since then it's been a passion of mine that I've spent time on on-and-off over the years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
