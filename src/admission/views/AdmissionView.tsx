import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderAdmission from '../components/HeaderAdmission/HeaderAdmission';
import FormAdmission from '../components/FormAdmission/FormAdmission';
import FaqsAdmission from '../components/FaqsAdmission/FaqsAdmission';

const AdmissionView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('admission');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderAdmission />

      <FormAdmission />

      <FaqsAdmission />

      <JoinUs />

    </div>
  )
}

export default AdmissionView;