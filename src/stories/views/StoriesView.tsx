import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderStories from '../components/HeaderStories/HeaderStories';
import Stories from '../components/Stories/Stories';

const StoriesView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('terms');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderStories />

      <Stories />

      <JoinUs />

    </div>
  )
}

export default StoriesView;