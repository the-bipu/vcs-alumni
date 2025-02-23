import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';
import { teams } from '@/components/assets/teams';
import Link from 'next/link';

export default function Gallery() {
    const { setActiveTab, currentYear } = useContext(UserContext);
    useEffect(() => {
        setActiveTab('website');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Website Team | Vaishali Central School Alumni | {currentYear}</title>
                <meta name="description" content="Meet the dedicated website team behind Vaishali Central School Alumni. Learn about the developers, designers, and contributors who maintain and enhance our online platform." />
                <meta name="keywords" content="Vaishali Central School website team, alumni website developers, school website management, alumni portal team" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Website Team | Vaishali Central School Alumni" />
                <meta property="og:description" content="Discover the passionate team managing the Vaishali Central School Alumni website, ensuring a seamless experience for alumni worldwide." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/developers" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Website Team | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Get to know the team behind the Vaishali Central School Alumni website and their efforts in connecting alumni across the globe." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>

                    <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-col items-start gap-2'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>Website Team</h1>
                                <p className='text-base text-justify text-black'>
                                    Meet the dedicated team behind the Vaishali Central School Alumni website. Our passionate members work tirelessly to maintain and enhance this platform, ensuring a seamless experience for alumni to connect, share, and stay updated.
                                </p>
                            </div>
                            <div className='w-full h-auto flex flex-row flex-wrap items-center md:justify-between justify-center gap-8'>

                                {teams.map((item: any, index: any) => (
                                    <div key={index} className='flex flex-col gap-4'>
                                        <Image src={item.image} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 transition-all border-8 border-white shadow rounded-full object-cover grayscale hover:grayscale-0' />
                                        <div className='flex flex-col text-center'>
                                            <Link href={`/developers/${item?.link}`}>
                                                <div className='text-xl font-semibold cursor-pointer text-black transition-all hover:underline'>{item?.name}</div>
                                            </Link>
                                            <div className='text-blue-700 text-base font-medium'>{item?.position}</div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}