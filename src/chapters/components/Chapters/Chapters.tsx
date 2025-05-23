import Image from 'next/image'
import React from 'react'

const Chapters = () => {
  return (
    <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
        <div className='w-full h-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between'>
          <h2 className='md:text-4xl text-2xl md:text-left text-center font-bold text-[#353535]'>Chapters</h2>
        </div>
        <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
          <Image src={'/meetups/meetup1.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
          <Image src={'/meetups/meetup2.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
          <Image src={'/meetups/meetup3.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
          <Image src={'/meetups/meetup4.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
          <Image src={'/meetups/meetup5.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
          <Image src={'/meetups/meetup6.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Chapters