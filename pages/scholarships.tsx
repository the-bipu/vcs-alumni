import MiniNav from '@/components/common/MiniNav'
import { Button } from '@/components/ui/button'
import Footer from '@/src/common/Footer'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Scholarships = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Scholarships | Vaishali Central School Alumni | Support for Your Educational Journey</title>
                <meta name="google-site-verification" content="IglenbFjY-IMapS880ujO1AWTLZ-PZjAe8uWRYU-hjE" />
                <meta name="description" content="Discover scholarship opportunities provided by Vaishali Central School Alumni to support students in their academic and professional journey." />
                <meta name="keywords" content="VCS scholarships, Vaishali Central School Alumni support, student aid, education funding, scholarships for students, Bihar education help" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Scholarships | Vaishali Central School Alumni | Support for Your Educational Journey" />
                <meta property="og:description" content="Explore scholarships and financial aid opportunities offered by the Vaishali Central School Alumni community to empower students and their dreams." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/scholarships" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Scholarships | Vaishali Central School Alumni | Support for Your Educational Journey" />
                <meta name="twitter:description" content="Access scholarships offered by the Vaishali Central School Alumni network to help you achieve your educational goals." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <MiniNav />

            <div className='flex flex-col gap-16 w-full h-auto items-center justify-center py-20'>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-16'>
                    <div className='md:w-1/2 w-full h-auto flex flex-col gap-3 items-start justify-between'>
                        <h2 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>Scholarships Coming Soon</h2>
                        <div className='text-justify text-black mb-4'>
                            We’re working on bringing scholarship opportunities exclusively for Vaishali Central School students and alumni. These scholarships will be aimed at supporting your academic journey and recognizing your achievements. Stay tuned—details will be posted here soon!
                        </div>
                        <Button variant={'rounded'} className='text-base' disabled>
                            Stay Tuned
                        </Button>
                    </div>
                    <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                        <Image src={'/connect/join-us.jpg'} alt='scholarships' width={550} height={550} priority={true} className='shadow-md w-full h-96 object-cover rounded-md' />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Scholarships