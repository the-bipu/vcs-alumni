import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderPrivacy from '../components/HeaderPrivacy/HeaderPrivacy';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

const PrivacyView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('privacy');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderPrivacy />

      <PrivacyPolicy />

      <JoinUs />

    </div>
  )
}

export default PrivacyView;