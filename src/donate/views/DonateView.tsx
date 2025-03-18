import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderDonate from '../components/HeaderDonate/HeaderDonate';
import DonationForm from '../components/DonationForm/DonationForm';
import DonationFaqs from '../components/DonationFaqs/DonationFaqs';

const DonateView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('terms');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderDonate />

      <DonationForm />

      <DonationFaqs />

      <JoinUs />

    </div>
  )
}

export default DonateView;