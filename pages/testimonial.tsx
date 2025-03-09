import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';
import { testimonial } from '@/components/assets/testimonial';

export default function Gallery() {
    const { setActiveTab, currentYear } = useContext(UserContext);
    useEffect(() => {
        setActiveTab('testimonial');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Testimonial | Vaishali Central School Alumni | {currentYear}</title>
                <meta name="description" content="Read inspiring testimonials from Vaishali Central School alumni. Discover their experiences, achievements, and how the school shaped their journey." />
                <meta name="keywords" content="Vaishali Central School testimonials, alumni success stories, school experiences, student testimonials, alumni feedback" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Testimonial | Vaishali Central School Alumni" />
                <meta property="og:description" content="Explore heartfelt testimonials from Vaishali Central School alumni, sharing their success stories and cherished memories." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/testimonial" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Testimonial | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Hear from Vaishali Central School alumni about their experiences, career paths, and how the school contributed to their growth." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>

                    <div className='w-full h-auto flex items-center justify-center relative'>
                        <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
                        <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                            <div className='md:text-4xl text-3xl font-bold text-[#353535]'>What Our Students Say</div>
                            <div className='text-lg font-medium'>Hear from our students about their experiences.</div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20  border-b border-b-[#acacac]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                            <div className='w-full h-auto flex flex-col items-start gap-2'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535] capitalize'>Testimonials from the Students</h1>
                                <p className='text-base text-justify text-black'>
                                    Hear from our alumni as they share their experiences, memories, and the impact Vaishali Central School has had on their lives. Their stories reflect the values, friendships, and lessons that continue to inspire them beyond school.
                                </p>
                            </div>

                            <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
                                {testimonial.map((item, index) => (
                                    <div key={index} className={`w-auto flex flex-col rounded-xl border p-8 bg-[#eaeaea]`}>

                                        <div className='w-full flex flex-col justify-center items-start'>

                                            <div className='flex flex-row items-center justify-center gap-4'>
                                                <div className=' w-20 h-20 text-6xl bg-black text-white font-semibold rounded-md flex items-center justify-center'>{item.name.slice(0, 1)}</div>
                                                <div className='w-auto flex flex-col justify-center items-start'>
                                                    <div className='text-lg font-normal text-[#202124]'>{item.name}</div>
                                                    <div className='text-[#2d2d2d] font-light text-sm'>{item.post}</div>
                                                </div>
                                            </div>

                                            <div className='md:text-xl text-lg font-medium text-[#202124] mt-8 md:leading-8 leading-7 w-full'>{item.message}</div>
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