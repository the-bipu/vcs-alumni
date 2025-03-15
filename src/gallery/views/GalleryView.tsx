import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import GalleryMain from '../components/GalleryMain/GalleryMain';
import MeetUpMain from '../components/MeetUpMain/MeetUpMain';

const GalleryView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('gallery');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <GalleryMain />

      <MeetUpMain />

      <JoinUs />

    </div>
  )
}

export default GalleryView;