import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
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
                            <div className='w-1/2 h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover' />
                            </div>
                            <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>VCS Alumni Association</h1>
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

                    <div className='flex w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
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
                            <div className='w-1/2 h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover' />
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-row items-center justify-between'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Alumni Association Activities</h1>
                                <button
                                    className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                                >
                                    Explore More
                                </button>
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
                            <div className='w-full h-auto flex flex-row items-center justify-between'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Alumni Association Gallery</h1>
                                <button
                                    className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                                >
                                    Explore More
                                </button>
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

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-row items-center justify-between'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>Join Us Today !!</h1>
                                <button
                                    className='px-6 py-1.5 transition-all bg-transparent hover:bg-black text-black hover:text-[#fff] text-semibold border-2 border-[#000] rounded-full'
                                >
                                    Join Us
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
