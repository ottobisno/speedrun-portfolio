import navIcon from '../img/icons/controller-icon-angled.png';

const Header = () => {
  return (
    <div className="container-fluid" id="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-darker">
        <a href="#" className="navbar-brand" id="title">
          <img src={navIcon} alt="Icon of a Super Nintendo controller" width="50" height="50" id="controller-icon" />
          Silent Wolf's Speedruns
        </a>
        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav text-center ms-auto me-2">
            <li>
              <a className="nav-link" href="#about-me">About Me</a>
            </li>
            <li>
              <a className="nav-link" href="#latest-run">Latest Run</a>
            </li>
            <li>
              <a className="nav-link" href="#plans">Plans</a>
            </li>
            <li>
              <a className="nav-link" href="#my-speedruns">My Speedruns</a>
            </li>
            <li>
              <a className="nav-link" href="#socials">Socials</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Header;
