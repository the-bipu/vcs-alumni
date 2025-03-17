import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { AccountController } from '@/src/account/controller/AccountController';
import AccountView from '@/src/account/views/AccountView';

const AccountPage: NextPage = (props) => (
    <AccountController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Account | Vaishali Central School Alumni</title>
            <meta name="description" content="Log in to your Vaishali Central School alumni account to stay connected, update your profile, and engage with the alumni community." />
            <meta name="keywords" content="Vaishali Central School login, alumni login, student portal, sign in, school alumni network" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Login | Vaishali Central School" />
            <meta property="og:description" content="Access your Vaishali Central School alumni account. Log in to connect with batchmates, manage your profile, and stay updated on alumni events." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/account" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Login | Vaishali Central School" />
            <meta name="twitter:description" content="Sign in to your Vaishali Central School alumni account and stay connected with your school community." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <AccountView />
    </AccountController>
);

export default AccountPage;