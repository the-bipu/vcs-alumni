import React from 'react';
import Image from 'next/image';

const GalleryMain = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <div className='w-full h-auto flex flex-col items-start gap-2'>
                    <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Alumni Association Gallery</h1>
                    <p className='text-base text-justify text-black'>
                        Explore the VCS Alumni Association Gallery and relive the unforgettable moments of your school days. From reunions to special events, these snapshots celebrate our shared journey and lifelong connections.
                    </p>
                </div>
                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
                    <Image src={'/gallery/gallery1.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                    <Image src={'/gallery/gallery2.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                    <Image src={'/gallery/gallery3.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                    <Image src={'/gallery/gallery4.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                    <Image src={'/gallery/gallery5.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                    <Image src={'/gallery/gallery6.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md cursor-pointer transition-all hover:scale-105' />
                </div>
            </div>
        </div>
    )
}

export default GalleryMain