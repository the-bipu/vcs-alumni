import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import FacultyHeader from '../components/FacultyHeader/FacultyHeader';
import FacultySection from '../components/FacultySection/FacultySection';

const FacultyView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('faculty');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <FacultyHeader />

      <FacultySection />

      <JoinUs />

    </div>
  )
}

export default FacultyView;