import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import GuidanceMain from '../components/GuidanceMain/GuidanceMain';
import GuidanceForm from '../components/GuidanceForm/GuidanceForm';

const GuidanceView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('guidance');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <GuidanceMain />

      <GuidanceForm />

      <JoinUs />

    </div>
  )
}

export default GuidanceView;