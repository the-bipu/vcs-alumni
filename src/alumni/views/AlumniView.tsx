import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import AlumniPage from '../components/AlumniPage';

const AlumniView = ({alumniData}: any) => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('alumni');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <AlumniPage alumniData={alumniData} />
      
      <JoinUs />

    </div>
  )
}

export default AlumniView;