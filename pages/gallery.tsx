import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { GalleryController } from '@/src/gallery/controller/GalleryController';
import GalleryView from '@/src/gallery/views/GalleryView';

const GalleryPage: NextPage = (props) => (
    <GalleryController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Gallery | Vaishali Central School Alumni | Memories That Last a Lifetime</title>
            <meta name="description" content="Explore unforgettable moments shared by Vaishali Central School alumni. Relive reunions, events, and cherished school memories through our alumni gallery." />
            <meta name="keywords" content="Vaishali Central School Alumni Gallery, alumni memories, reunions, school events, alumni meet, school life photos" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Vaishali Central School Alumni | Memories That Last a Lifetime" />
            <meta property="og:description" content="Take a nostalgic journey through the Vaishali Central School Alumni Gallery. Reconnect with old friends and relive the best moments of your school life." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/gallery" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Vaishali Central School Alumni | Memories That Last a Lifetime" />
            <meta name="twitter:description" content="Browse the alumni gallery of Vaishali Central School and celebrate the cherished memories of school reunions, meet-ups, and lifelong friendships." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <GalleryView />
    </GalleryController>
);

export default GalleryPage;