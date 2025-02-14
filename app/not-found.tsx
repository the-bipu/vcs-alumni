'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-full h-screen bg-[#212121] flex flex-col gap-10 items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div>
          Go back to the <Link href="/" className='transition-all font-bold hover:underline'>
            homepage
          </Link>
        </div>
      </div>
      <div className="loader"></div>
    </div>
  );
}