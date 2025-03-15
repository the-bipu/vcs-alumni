import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderTerms from '../components/HeaderTerms/HeaderTerms';
import TermsCondition from '../components/TermsCondition/TermsCondition';

const TermsView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('terms');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderTerms />

      <TermsCondition />

      <JoinUs />

    </div>
  )
}

export default TermsView;