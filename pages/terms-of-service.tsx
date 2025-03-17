import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { TermsController } from '@/src/terms/controller/TermsController';
import TermsView from '@/src/terms/views/TermsView';

const TermsPage: NextPage = (props) => (
    <TermsController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Terms of Service | Vaishali Central School Alumni</title>
            <meta name="description" content="Read the terms of service and privacy policy for the VCS Alumni network. Understand our policies on data protection, user privacy, and community guidelines." />
            <meta name="keywords" content="VCS Alumni terms, privacy policy, alumni network policies, data protection, user privacy, community guidelines, school alumni" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Terms of Service | Vaishali Central School Alumni" />
            <meta property="og:description" content="Review the official terms and policies for the VCS Alumni network, covering privacy, user data, and community guidelines." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/terms-of-service" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Terms of Service | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Learn about the VCS Alumni policies on privacy, user data protection, and community engagement." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <TermsView />
    </TermsController>
);

export default TermsPage;