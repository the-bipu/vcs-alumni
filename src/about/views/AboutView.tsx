import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import AboutAlumni from '../components/AboutAlumni/AboutAlumni';
import AboutDirector from '../components/AboutDirector/AboutDirector';
import AboutDean from '../components/AboutDean/AboutDean';
import FaqsAbout from '../components/FaqsAbout/FaqsAbout';

const AboutView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('about');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <AboutAlumni />

      <AboutDirector />

      <AboutDean />

      <FaqsAbout />

      <JoinUs />

    </div>
  )
}

export default AboutView;