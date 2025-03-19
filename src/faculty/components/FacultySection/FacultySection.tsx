import Image from 'next/image'
import React from 'react'

const FacultySection = () => {
  return (
    <div className='flex w-full h-auto items-center justify-center py-20'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
        <div className='w-full h-auto flex flex-row items-center md:justify-between justify-center'>
          <h2 className='md:text-4xl text-3xl font-bold text-[#353535]'>VCS Staffs and Teachers</h2>
        </div>
        <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
          <Image src={'/staffs/teacher-1.png'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
          <Image src={'/staffs/teacher-2.png'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
          <Image src={'/staffs/teacher-3.png'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default FacultySection