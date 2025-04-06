import MiniNav from '@/components/common/MiniNav'
import Footer from '@/src/common/Footer'
import Head from 'next/head'
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

            <div>
                Scholarships
            </div>

            <Footer />
        </div>
    )
}

export default Scholarships