import React from 'react';
import Image from 'next/image';
import Navbar from '@/src/common/Navbar';

const DevelopersDetails = () => {
    return (
        <div>
            <Navbar />

            <div className='w-full h-auto flex flex-col items-center justify-center'>

                <div className='w-10/12 h-full flex flex-col items-center gap-20 my-20'>

                    <div className='flex flex-row gap-20 w-full flex-wrap items-center justify-around'>
                        <div className='w-full h-auto rounded-3xl flex md:flex-row flex-col gap-10'>

                            <div className='flex flex-col gap-4 md:min-w-96 min-w-auto items-center justify-center h-auto'>
                                <Image src='/teams/bipanshu-kumar.jpg' alt='Bipanshu Kumar' width={300} height={300} className='md:w-96 w-80 md:h-96 h-80 object-cover rounded-full cursor-pointer' />
                                <div className='flex flex-col text-center'>
                                    <span className='text-xl font-bold text-black cursor-pointer'>Bipanshu Kumar</span>
                                    <span className='text-lg text-[#FF2B06] cursor-pointer'>Lead Software Developer</span>
                                </div>
                            </div>

                            <div className='w-auto h-auto flex flex-col items-start justify-start text-center capitalize'>

                                <div className='flex w-full flex-row items-end h-auto gap-2'>
                                    <Image src='/about/upper-quotation.svg' alt='' width={96} height={96} className='w-16 h-16 object-contain' />
                                    <hr className='h-[1px] w-full bg-white mb-6' />
                                </div>
                                <div className='my-6 text-left italic font-bold'>
                                    ISO Nirvana 🔮🪄
                                </div>
                                <div className='flex w-full flex-row items-end h-auto gap-6'>
                                    <hr className='h-[1px] w-full bg-white mb-10' />
                                    <Image src='/about/down-quotation.svg' alt='' width={96} height={96} className='w-16 h-16 object-contain' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevelopersDetails