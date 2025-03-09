import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';

export default function Gallery() {
    const { setActiveTab } = useContext(UserContext);
    useEffect(() => {
        setActiveTab('gallery');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Gallery | Vaishali Central School Alumni | Memories That Last a Lifetime</title>
                <meta name="description" content="Explore unforgettable moments shared by Vaishali Central School alumni. Relive reunions, events, and cherished school memories through our alumni gallery." />
                <meta name="keywords" content="Vaishali Central School Alumni Gallery, alumni memories, reunions, school events, alumni meet, school life photos" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Vaishali Central School Alumni | Memories That Last a Lifetime" />
                <meta property="og:description" content="Take a nostalgic journey through the Vaishali Central School Alumni Gallery. Reconnect with old friends and relive the best moments of your school life." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/gallery" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Memories That Last a Lifetime" />
                <meta name="twitter:description" content="Browse the alumni gallery of Vaishali Central School and celebrate the cherished memories of school reunions, meet-ups, and lifelong friendships." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-col items-start gap-2'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Alumni Association Gallery</h1>
                                <p className='text-base text-justify text-black'>
                                    Explore the VCS Alumni Association Gallery and relive the unforgettable moments of your school days. From reunions to special events, these snapshots celebrate our shared journey and lifelong connections.
                                </p>
                            </div>
                            <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
                                <Image src={'/gallery/gallery1.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/gallery/gallery2.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/gallery/gallery3.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/gallery/gallery4.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/gallery/gallery5.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/gallery/gallery6.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20 bg-[#eaeaea]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between'>
                                <h2 className='md:text-4xl text-2xl md:text-left text-center font-bold text-[#353535]'>VCS Alumni Association Meetups</h2>
                            </div>
                            <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
                                <Image src={'/meetups/meetup1.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/meetups/meetup2.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/meetups/meetup3.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/meetups/meetup4.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/meetups/meetup5.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                                <Image src={'/meetups/meetup6.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover rounded-md shadow-md' />
                            </div>
                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}
