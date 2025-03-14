import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DeanHome = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/about/vice-principal.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover shadow-md rounded-md' />
                </div>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Vice-Principal's Message</h2>
                    <p className='text-base text-black text-justify'>
                        At Vaishali Central School, we strive to create an environment where students can flourish academically, socially, and personally. Education is not just about acquiring knowledge; it is about developing character, resilience, and a lifelong love for learning.

                        <br /><br />

                        Our commitment is to nurture young minds with strong values, discipline, and innovation, ensuring they grow into responsible and compassionate global citizens. With the support of our dedicated faculty and a vibrant learning atmosphere, we encourage students to dream big, work hard, and achieve excellence in all aspects of life.

                        <br /><br />

                        Together, let’s continue fostering a culture of success, respect, and continuous growth.
                    </p>
                    <Link href={'/about'}>
                        <button
                            className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full mt-8'
                        >
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeanHome