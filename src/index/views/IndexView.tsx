'use client';

import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import AboutAlumni from '../components/AboutAlumni/AboutAlumni';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import DirectorHome from '../components/DirectorHome/DirectorHome';
import DeanHome from '../components/DeanHome/DeanHome';
import GalleryHome from '../components/GalleryHome/GalleryHome';
import MeetUpHome from '../components/MeetUpHome/MeetUpHome';
import FaqsHome from '../components/FaqsHome/FaqsHome';

const IndexView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('home');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderHome />

      <AboutAlumni />

      <DirectorHome />

      <DeanHome />

      <GalleryHome />

      <MeetUpHome />

      <FaqsHome />

      <JoinUs />

    </div>
  )
}

export default IndexView;