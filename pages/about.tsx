import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import AboutView from '@/src/about/views/AboutView';
import { AboutController } from '@/src/about/controller/AboutController';

const AboutPage: NextPage = (props) => (
    <AboutController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>About | Vaishali Central School | Excellence in Education</title>
            <meta name="description" content="Learn more about Vaishali Central School's mission, vision, and commitment to academic excellence and holistic development. Discover our journey and values." />
            <meta name="keywords" content="About Vaishali Central School, school history, mission, vision, education in Bihar, CBSE school, holistic learning" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="About Vaishali Central School | Excellence in Education" />
            <meta property="og:description" content="Explore the legacy of Vaishali Central School, our vision for the future, and how we shape young minds through quality education and innovative learning methods." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/about" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About Vaishali Central School | Excellence in Education" />
            <meta name="twitter:description" content="Discover Vaishali Central School's commitment to providing quality education, fostering innovation, and preparing students for a bright future." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <AboutView />
    </AboutController>
);

export default AboutPage;