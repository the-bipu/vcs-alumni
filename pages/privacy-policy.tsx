import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { PrivacyController } from '@/src/privacy/controller/PrivacyController';
import PrivacyView from '@/src/privacy/views/PrivacyView';

const PrivacyPage: NextPage = (props) => (
    <PrivacyController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Privacy Policy | Vaishali Central School Alumni</title>
            <meta name="description" content="Review the privacy policy for the VCS Alumni network. Learn how we collect, use, and protect user data while ensuring a secure and respectful community experience." />
            <meta name="keywords" content="VCS Alumni privacy policy, alumni data protection, user privacy, community guidelines, data security, school alumni policies" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Privacy Policy | Vaishali Central School Alumni" />
            <meta property="og:description" content="Understand how the VCS Alumni network safeguards user data, maintains privacy, and enforces community guidelines." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/privacy" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Privacy Policy | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Learn how the VCS Alumni network ensures user data privacy, security, and responsible data handling." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <PrivacyView />
    </PrivacyController>
);

export default PrivacyPage;