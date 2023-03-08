import LeftPanel from '../components/LeftPanel/index';
import RightPanel from '../components/RightPanel/index';
import { useQuery } from '@apollo/client';
import { QUERY_SPEEDRUNS } from '../utils/queries';

// Context created to provide speedrun data from the db to all child components
import { SpeedrunContext } from '../context/SpeedrunContext';

const Home = () => {
  // Using GraphQL to query the database for data for all speedruns
  const { data } = useQuery(QUERY_SPEEDRUNS);
  const speedruns = data?.speedruns || [];

  return (
    <div className="container-xxl">
      <div id="home-div" className="row justify-content-center">
        <SpeedrunContext.Provider value={speedruns}>
          <LeftPanel />
          <RightPanel />
        </SpeedrunContext.Provider>
      </div>
    </div>
  )
};

export default Home;
