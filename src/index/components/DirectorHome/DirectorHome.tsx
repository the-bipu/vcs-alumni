import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DirectorHome = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col-reverse items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Director's Message</h2>
                    <p className='text-base text-justify text-black'>
                        At <strong>Vaishali Central School,</strong> we believe that education is not just about academic excellence but about nurturing responsible, compassionate, and innovative individuals.
                        Our goal is to empower young minds with the skills and values necessary to navigate the challenges of the future.
                    </p>
                    <p className='text-base text-justify text-black mt-4'>
                        We emphasize a holistic approach to learning, fostering creativity, critical thinking, and a spirit of curiosity.
                        With dedicated faculty, state-of-the-art facilities, and a nurturing environment, we are committed to shaping tomorrow’s leaders.
                        Let’s work together to build a brighter future for our children!"
                    </p>
                    <Link href={'/about'}>
                        <button
                            className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full mt-8'
                        >
                            Explore More
                        </button>
                    </Link>
                </div>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/about/director.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover shadow-md rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default DirectorHome