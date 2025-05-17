import Image from 'next/image'
import React from 'react'

const MeetUpMain = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20 bg-[#eaeaea]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <div className='w-full h-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between'>
                    <h2 className='md:text-4xl text-2xl md:text-left text-center font-bold text-[#353535]'>VCS Alumni Association Meetups</h2>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup1.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup2.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup3.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup4.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup5.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                    <div className='w-full h-64 object-cover rounded-md shadow-md cursor-pointer overflow-hidden'>
                        <Image src={'/meetups/meetup6.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-full object-cover transition-all hover:scale-105' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetUpMain