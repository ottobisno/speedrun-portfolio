import About from './About';
import Latest from './Latest';
import Plans from './Plans';

const LeftPanel = () => {
  return (
    <div id="left-panel" className="col-12 col-xxl-2">
      <div className="container-fluid px-0">
        <div className="row justify-content-between">
          <About />
          <Latest />
          <Plans />
        </div>
      </div>
    </div>
  )
};

export default LeftPanel;
