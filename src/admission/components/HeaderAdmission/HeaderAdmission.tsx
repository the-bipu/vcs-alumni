import React from 'react';
import Image from 'next/image';

const HeaderAdmission = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center relative'>
            <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
            <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                <div className='md:text-4xl text-3xl font-bold text-[#353535]'>Admission Enquiry</div>
                <div className='text-lg font-medium'>Get all the information you need about our admission process.</div>
            </div>
        </div>
    )
}

export default HeaderAdmission