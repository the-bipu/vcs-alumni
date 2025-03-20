import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderJobs from '../components/HeaderJobs/HeaderJobs';
import JobsList from '../components/JobsList/JobsList';

const JobsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('jobs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderJobs />

      <JobsList />

      <JoinUs />

    </div>
  )
}

export default JobsView;