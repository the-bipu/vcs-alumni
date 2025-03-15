import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/userContext';

import JoinUs from '@/components/common/JoinUs';
import HeaderTestimonial from '../components/HeaderTestimonial/HeaderTestimonial';
import Testimonials from '../components/Testimonials/Testimonials';

const TestimonialView = () => {
  const { setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab('faqs');
  }, [setActiveTab]);

  return (
    <div className='w-full h-auto min-h-screen bg-white flex flex-col gap-6 items-center justify-center border-b border-b-[#acacac]'>

      <HeaderTestimonial />

      <Testimonials />

      <JoinUs />

    </div>
  )
}

export default TestimonialView;