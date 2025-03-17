import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { GuidanceController } from '@/src/guidance/controller/GuidanceController';
import GuidanceView from '@/src/guidance/views/GuidanceView';

const GuidancePage: NextPage = (props) => (
    <GuidanceController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Career Guidance | Vaishali Central School Alumni</title>
            <meta name="description" content="Gain career insights, mentorship, and professional guidance from Vaishali Central School alumni. Learn from industry experts and shape your future." />
            <meta name="keywords" content="Career guidance, alumni mentorship, Vaishali Central School, professional growth, career counseling, networking" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Career Guidance | Vaishali Central School Alumni" />
            <meta property="og:description" content="Explore career opportunities, mentorship programs, and expert guidance from successful Vaishali Central School alumni." />
            <meta property="og:image" content="/logo/og-career.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/guidance" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Career Guidance | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Connect with experienced alumni for career guidance, industry insights, and mentorship to shape your professional journey." />
            <meta name="twitter:image" content="/logo/og-career.png" />
        </Head>

        <GuidanceView />
    </GuidanceController>
);

export default GuidancePage;