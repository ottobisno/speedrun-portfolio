import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

const Home = () => {   
  return (
    <div className="container-xxl">
      <div className="row p-3 justify-content-center">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
};

export default Home;
