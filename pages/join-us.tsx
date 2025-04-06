import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MiniNav from '@/components/common/MiniNav';
import Footer from '@/src/common/Footer';
import { Button } from '@/components/ui/button';
import { FaTeamspeak } from 'react-icons/fa';
import Head from 'next/head';

const JoinUs = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Join Us | Vaishali Central School Alumni | Connect, Collaborate, Grow</title>
                <meta name="google-site-verification" content="IglenbFjY-IMapS880ujO1AWTLZ-PZjAe8uWRYU-hjE" />
                <meta name="description" content="Join the Vaishali Central School Alumni community to reconnect with fellow alumni, expand your network, and contribute to shared growth and opportunities." />
                <meta name="keywords" content="Vaishali Central School Alumni, Join VCS alumni, alumni registration, VCS community, reconnect VCS, VCS alumni network" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Join Us | Vaishali Central School Alumni | Connect, Collaborate, Grow" />
                <meta property="og:description" content="Become part of the Vaishali Central School Alumni network. Reconnect with classmates, collaborate on initiatives, and grow together." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/join-us" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Join Us | Vaishali Central School Alumni | Connect, Collaborate, Grow" />
                <meta name="twitter:description" content="Sign up and be part of the Vaishali Central School Alumni community. Reconnect, grow your network, and stay involved." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <MiniNav />

            <div className='flex w-full h-auto items-center justify-center py-20'>
                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Join Us Today !!</h2>
                        <div className='text-justify text-black mb-4'>
                            Joining the Vaishali Central School Alumni Association isn’t just about reconnecting with old friends—it’s about celebrating a shared legacy and shaping the future together. As an alumnus, you are part of a vibrant network of achievers, dreamers, and change-makers.

                            <br />
                            <br />

                            Stay connected, inspire the next generation, and keep the Vaishali Central School spirit alive. Your journey with VCS didn’t end at graduation—it’s a lifelong bond. Join us today and be a part of something bigger! 🚀🎓
                        </div>
                        <Link href={'/auth/login'}>
                            <Button variant={'rounded'} className='text-base'>
                                Join Us <FaTeamspeak />
                            </Button>
                        </Link>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default JoinUs