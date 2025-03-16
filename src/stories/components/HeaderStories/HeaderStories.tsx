import Image from 'next/image'
import React from 'react'

const HeaderStories = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center relative'>
            <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
            <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                <h1 className='md:text-4xl text-3xl font-bold text-[#353535]'>Coming Soon</h1>
                {/* <div className='text-lg font-medium'>Support our mission by making a donation.</div> */}
            </div>
        </div>
    )
}

export default HeaderStories