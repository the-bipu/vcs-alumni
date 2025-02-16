import Image from 'next/image'
import React from 'react'

const JoinUs = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20 border-t border-t-[#acacac]'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-between'>
                    <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-1'>Join Us Today !!</h2>
                    <div className='text-justify text-black mb-4'>
                        Joining the Vaishali Central School Alumni Association isn’t just about reconnecting with old friends—it’s about celebrating a shared legacy and shaping the future together. As an alumnus, you are part of a vibrant network of achievers, dreamers, and change-makers.

                        <br />
                        <br />

                        Stay connected, inspire the next generation, and keep the Vaishali Central School spirit alive. Your journey with VCS didn’t end at graduation—it’s a lifelong bond. Join us today and be a part of something bigger! 🚀🎓
                    </div>
                    <button
                        className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                    >
                        Join Us
                    </button>
                </div>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/connect/connect.jpg'} alt='connect' width={550} height={550} priority={true} className='border-8 border-white shadow-md w-full h-80 object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default JoinUs