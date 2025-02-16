import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';

export default function Alumni() {
    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Vaishali Central School Alumni | Memories That Last a Lifetime</title>
                <meta name="description" content="Explore unforgettable moments shared by Vaishali Central School alumni. Relive reunions, events, and cherished school memories through our alumni gallery." />
                <meta name="keywords" content="Vaishali Central School Alumni Gallery, alumni memories, reunions, school events, alumni meet, school life photos" />
                <meta name="author" content="alumni.vaishalicentralschool.com" />

                <meta property="og:title" content="Vaishali Central School Alumni | Memories That Last a Lifetime" />
                <meta property="og:description" content="Take a nostalgic journey through the Vaishali Central School Alumni Gallery. Reconnect with old friends and relive the best moments of your school life." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://www.alumni.vaishalicentralschool.com/gallery" />

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
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-80 object-cover' />
                            </div>
                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}
