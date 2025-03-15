import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { DeveloperController } from '@/src/developer/controller/DeveloperController';
import DeveloperView from '@/src/developer/views/DeveloperView';

const DeveloperPage: NextPage = (props) => (
    <div>
        <DeveloperController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Website Team | Vaishali Central School Alumni</title>
                <meta name="description" content="Meet the dedicated website team behind Vaishali Central School Alumni. Learn about the developers, designers, and contributors who maintain and enhance our online platform." />
                <meta name="keywords" content="Vaishali Central School website team, alumni website developers, school website management, alumni portal team" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Website Team | Vaishali Central School Alumni" />
                <meta property="og:description" content="Discover the passionate team managing the Vaishali Central School Alumni website, ensuring a seamless experience for alumni worldwide." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/developers" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Website Team | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Get to know the team behind the Vaishali Central School Alumni website and their efforts in connecting alumni across the globe." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <DeveloperView />
        </DeveloperController>
    </div>
);

export default DeveloperPage;