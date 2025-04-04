import Image from 'next/image'
import React from 'react'

const HeaderTestimonial = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center relative'>
            <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
            <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                <div className='md:text-4xl text-3xl font-bold text-[#353535]'>What Our Students Say</div>
                <div className='text-lg font-medium'>Hear from our students about their experiences.</div>
            </div>
        </div>
    )
}

export default HeaderTestimonial