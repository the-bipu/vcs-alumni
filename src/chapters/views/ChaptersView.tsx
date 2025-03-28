import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import Chapters from '../components/Chapters/Chapters';
import HeaderChapters from '../components/HeaderChapter/HeaderChapter';

const ChaptersView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('chapters');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center'>

      <HeaderChapters />

      <Chapters />
      
      <JoinUs />

    </div>
  )
}

export default ChaptersView;