import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryHome = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <div className='w-full h-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between'>
                    <h2 className='md:text-4xl text-2xl md:text-left text-center font-bold text-[#353535]'>VCS Alumni Association Gallery</h2>
                    <Link href={'/gallery'}>
                        <button
                            className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                        >
                            Explore Gallery
                        </button>
                    </Link>
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

export default GalleryHome