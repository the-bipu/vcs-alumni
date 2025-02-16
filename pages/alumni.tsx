import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';

export default function Alumni() {
    const { setActiveTab } = useContext(UserContext);
    useEffect(() => {
        setActiveTab('alumni');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Vaishali Central School Alumni | Connect, Inspire, Grow</title>
                <meta name="description" content="Stay connected with the vibrant alumni network of Vaishali Central School. Celebrate achievements, share experiences, and strengthen lifelong bonds." />
                <meta name="keywords" content="Vaishali Central School Alumni, alumni network, VCS alumni, school alumni, reconnect, Bihar alumni, alumni association, alumni success stories" />
                <meta name="author" content="alumni.vaishalicentralschool.com" />

                <meta property="og:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta property="og:description" content="Join the VCS Alumni Association and be part of a thriving community that celebrates success, fosters connections, and supports future generations." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://www.alumni.vaishalicentralschool.com/alumni" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta name="twitter:description" content="Reconnect with batchmates, celebrate achievements, and build a strong alumni community with Vaishali Central School." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>

                    <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-col items-start gap-2'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Proud Alumni</h1>
                                <p className='text-base text-justify text-black'> Our alumni have made us proud with their achievements in various fields. From successful careers to impactful contributions to society, they embody the values and excellence of Vaishali Central School. Celebrate their journey and get inspired by their stories! </p>
                            </div>
                            <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>

                                <div className='flex flex-col gap-4'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 border-8 border-white shadow-md rounded-full object-cover' />
                                    <div className='flex flex-col text-center'>
                                        <div className='text-xl text-black'>Randy Orten</div>
                                        <div className='text-blue-700 text-lg font-semibold'>Computer Science</div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 border-8 border-white shadow-md rounded-full object-cover' />
                                    <div className='flex flex-col text-center'>
                                        <div className='text-xl text-black'>Randy Orten</div>
                                        <div className='text-blue-700 text-lg font-semibold'>Computer Science</div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 border-8 border-white shadow-md rounded-full object-cover' />
                                    <div className='flex flex-col text-center'>
                                        <div className='text-xl text-black'>Randy Orten</div>
                                        <div className='text-blue-700 text-lg font-semibold'>Computer Science</div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 border-8 border-white shadow-md rounded-full object-cover' />
                                    <div className='flex flex-col text-center'>
                                        <div className='text-xl text-black'>Randy Orten</div>
                                        <div className='text-blue-700 text-lg font-semibold'>Computer Science</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}
