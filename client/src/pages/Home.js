import React from 'react';
import LeftPanel from '../components/LeftPanel/index';
import RightPanel from '../components/RightPanel/index';
import { useQuery } from '@apollo/client';
import { QUERY_SPEEDRUNS } from '../utils/queries';

const Home = () => {
  // Using GraphQL to query the database for data for all speedruns
  const { data } = useQuery(QUERY_SPEEDRUNS);
  const speedruns = data?.speedruns || [];

  return (
    <div className="container-xxl">
      <div className="row p-3 justify-content-center">
          <LeftPanel />
          <RightPanel speedruns={speedruns}/>
      </div>
    </div>
  )
};

export default Home;
