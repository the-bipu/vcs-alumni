import React from 'react';
import Head from 'next/head';

import { AlumniController } from '@/src/alumni/controller/AlumniController';
import AlumniView from '@/src/alumni/views/AlumniView';

const AlumniPage = () => {
    return (
        <AlumniController>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Our Alumni | Vaishali Central School Alumni | Connect, Inspire, Grow</title>
                <meta name="description" content="Stay connected with the vibrant alumni network of Vaishali Central School. Celebrate achievements, share experiences, and strengthen lifelong bonds." />
                <meta name="keywords" content="Vaishali Central School Alumni, alumni network, VCS alumni, school alumni, reconnect, Bihar alumni, alumni association, alumni success stories" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta property="og:description" content="Join the VCS Alumni Association and be part of a thriving community that celebrates success, fosters connections, and supports future generations." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/alumni" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta name="twitter:description" content="Reconnect with batchmates, celebrate achievements, and build a strong alumni community with Vaishali Central School." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <AlumniView />
        </AlumniController>
    );
};

export default AlumniPage;