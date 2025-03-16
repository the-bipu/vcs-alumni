import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { StoriesController } from '@/src/stories/controller/StoriesController';
import StoriesView from '@/src/stories/views/StoriesView';

const SuccessPage: NextPage = (props) => (
    <StoriesController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Success Stories | Vaishali Central School Alumni</title>
            <meta name="description" content="Explore inspiring success stories of Vaishali Central School Alumni. Learn how our graduates are making an impact in various fields worldwide." />
            <meta name="keywords" content="Vaishali Central School alumni success stories, alumni achievements, inspiring stories, vcs alumni impact" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Success Stories | Vaishali Central School Alumni" />
            <meta property="og:description" content="Discover the journeys of Vaishali Central School Alumni and their achievements. Read how they are excelling in their careers and contributing to society." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/success-stories" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Success Stories | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Read inspiring success stories of Vaishali Central School Alumni and how they are making a difference in the world." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <StoriesView />
    </StoriesController>
);

export default SuccessPage;