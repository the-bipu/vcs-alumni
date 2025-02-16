import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';

export default function Home() {
    const { setActiveTab } = useContext(UserContext);
    useEffect(() => {
      setActiveTab('home');
    }, [setActiveTab]);
    

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Vaishali Central School Alumni | Stay Connected, Stay Inspired</title>
                <meta name="description" content="Reconnect with old friends, network with fellow alumni, and celebrate the legacy of Vaishali Central School. Join the official alumni community today!" />
                <meta name="keywords" content="Vaishali Central School Alumni, alumni network, school alumni, reconnect, Bihar alumni, alumni association" />
                <meta name="author" content="alumni.vaishalicentralschool.com" />

                <meta property="og:title" content="Vaishali Central School Alumni | Stay Connected, Stay Inspired" />
                <meta property="og:description" content="Join the official alumni network of Vaishali Central School, Vaishali, Bihar. Connect with former classmates and relive cherished memories." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://www.alumni.vaishalicentralschool.com/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Stay Connected, Stay Inspired" />
                <meta name="twitter:description" content="Reconnect with batchmates, share experiences, and build a thriving alumni community of Vaishali Central School." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>
                    <div className='w-full h-auto flex items-center justify-center'>
                        <Image src={'/bg/school-building.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover' />
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                            <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover' />
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
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover' />
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between'>
                                <h2 className='md:text-4xl text-2xl md:text-left text-center font-bold text-[#353535]'>VCS Alumni Association Activities</h2>
                                <Link href={'/gallery'}>
                                    <button
                                        className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                                    >
                                        Explore Activities
                                    </button>
                                </Link>
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
