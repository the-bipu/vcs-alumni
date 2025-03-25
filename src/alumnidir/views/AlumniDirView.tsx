import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import AlumniDirPage from '../components/AlumniDirPage';

const AlumniDirView = ({ alumniData }: any) => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('alumnidir');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <AlumniDirPage alumniData={alumniData} />
      
      <JoinUs />

    </div>
  )
}

export default AlumniDirView;