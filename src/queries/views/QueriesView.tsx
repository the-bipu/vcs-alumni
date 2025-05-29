import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderQueries from '../components/HeaderQueries/HeaderQueries';
import Queries from '../components/Queries/Queries';

const QueriesView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('queries');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col items-center justify-center border-b border-b-[#acacac]'>

      <HeaderQueries />

      <Queries />
      
      <JoinUs />

    </div>
  )
}

export default QueriesView;