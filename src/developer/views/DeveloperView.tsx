import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import Developers from '../components/Developers';
import TechUsed from '../components/TechUsed';

const DeveloperView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('website');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col items-center justify-center'>

      <Developers />

      <TechUsed />

      <JoinUs />

    </div>
  )
}

export default DeveloperView;