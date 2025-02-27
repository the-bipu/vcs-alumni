import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { UserContext } from '@/context/userContext';

export default function Privacy() {
    const { setActiveTab, currentYear } = useContext(UserContext);

    useEffect(() => {
        setActiveTab('privacy');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Privacy Policy | VCS Alumni | Vaishali Central School | {currentYear}</title>
                <meta name="description" content="Review the privacy policy for the VCS Alumni network. Learn how we collect, use, and protect user data while ensuring a secure and respectful community experience." />
                <meta name="keywords" content="VCS Alumni privacy policy, alumni data protection, user privacy, community guidelines, data security, school alumni policies" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Privacy Policy | VCS Alumni | Vaishali Central School" />
                <meta property="og:description" content="Understand how the VCS Alumni network safeguards user data, maintains privacy, and enforces community guidelines." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/privacy" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy | VCS Alumni | Vaishali Central School" />
                <meta name="twitter:description" content="Learn how the VCS Alumni network ensures user data privacy, security, and responsible data handling." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-auto flex items-center justify-center'>
                        <Image src={'/bg/school-building.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover' />
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                            <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover' />
                            </div>
                            <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Director's Message</h2>
                                <p className='text-base text-[#818181] text-justify'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi illo neque, repellat voluptatum sit, quas quae distinctio reiciendis, at qui? Quod rem sapiente beatae esse omnis tempora ex.

                                    <br />

                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sint nam commodi hic quos magni adipisci tenetur pariatur fuga obcaecati amet, deleniti voluptas assumenda sunt molestiae, cum ad ipsam. Ullam.
                                </p>
                                <button
                                    className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full mt-8'
                                >
                                    Explore More
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
Privacy