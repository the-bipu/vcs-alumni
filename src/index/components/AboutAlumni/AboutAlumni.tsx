import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutAlumni = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/connect/about.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover shadow-md rounded-md' />
                </div>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>VCS Alumni Association</h2>
                    <p className='text-base text-black text-justify'>
                        The Vaishali Central School Alumni Association is a vibrant and supportive community that fosters lifelong connections among former students, faculty, and staff.
                        Our alumni network serves as a bridge between the past and the future, allowing graduates to stay connected, share experiences, and contribute to the school's growth.

                        <br /><br />

                        Through reunions, mentorship programs, and career guidance initiatives, we ensure that our alumni remain engaged and empowered in their personal and professional journeys.
                        Whether you want to reconnect with old classmates, share your success stories, or give back to your alma mater, the VCS Alumni Association provides the perfect platform to celebrate our shared legacy.
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

export default AboutAlumni