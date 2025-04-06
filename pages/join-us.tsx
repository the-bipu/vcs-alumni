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

            <div className='flex flex-col gap-16 w-full h-auto items-center justify-center py-20'>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Login with Google</h2>
                        <div className='text-justify text-black mb-4'>
                            To begin, simply head over to our Login Page and sign in using your Google account. This ensures secure and fast access without the need to remember another password.
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

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row-reverse flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Redirect to Account Page</h2>
                        <div className='text-justify text-black mb-4'>
                            Once logged in, you'll be automatically redirected to the Account Page. This is where your journey officially starts.
                        </div>
                        <Link href={'/account'}>
                            <Button variant={'rounded'} className='text-base'>
                                Account <FaTeamspeak />
                            </Button>
                        </Link>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Complete Your Profile</h2>
                        <div className='text-justify text-black mb-4'>
                            On the account page, you’ll be prompted to fill in your personal and academic details. Make sure to provide accurate and up-to-date information to help us verify your identity and background.
                        </div>
                        <Link href={'/account'}>
                            <Button variant={'rounded'} className='text-base'>
                                Account <FaTeamspeak />
                            </Button>
                        </Link>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row-reverse flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Choose Your Account Visibility</h2>
                        <div className='text-justify text-black mb-4'>
                            You can decide whether your profile will be Public (visible to other alumni) or Private (only visible to admins). This setting can be adjusted later from your profile settings as well.
                        </div>
                        <Button variant={'rounded'} className='text-base'>
                            Private / Public
                        </Button>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Admin Review & Verification</h2>
                        <div className='text-justify text-black mb-4'>
                            After submitting your information, our admin team will review your profile and verify your details. This step is essential to maintain the authenticity and quality of our alumni network.
                        </div>
                        <Button variant={'rounded'} className='text-base'>
                            Verification
                        </Button>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row-reverse flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Approval & Welcome Notice</h2>
                        <div className='text-justify text-black mb-4'>
                            If your submitted details pass the verification process, a Welcome Notice will be uploaded on the platform confirming your membership in the alumni community.
                        </div>
                        <Button variant={'rounded'} className='text-base'>
                            Approval & Welcome
                        </Button>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

                <div className='md:w-10/12 w-11/12 border-l-2 border-l-black pl-4 text-justify text-black'>
                    Note: If the background verification reveals incorrect, incomplete, or suspicious information, your account will be removed, and the associated email address will be permanently blocked from accessing the portal in the future. Please ensure that all data entered is genuine and accurate.
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default JoinUs