import React from 'react';
import Head from 'next/head';

import IndexView from '@/src/index/views/IndexView';
import { IndexController } from '@/src/index/controller/IndexController';
import type { NextPage } from 'next';

const IndexPage: NextPage = (props) => (
    <div>
        <IndexController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Vaishali Central School Alumni | Stay Connected, Stay Inspired</title>
                <meta name="google-site-verification" content="IglenbFjY-IMapS880ujO1AWTLZ-PZjAe8uWRYU-hjE" />
                <meta name="description" content="Reconnect with old friends, network with fellow alumni, and celebrate the legacy of Vaishali Central School. Join the official alumni community today!" />
                <meta name="keywords" content="Vaishali Central School Alumni, alumni network, school alumni, reconnect, Bihar alumni, alumni association" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Vaishali Central School Alumni | Stay Connected, Stay Inspired" />
                <meta property="og:description" content="Join the official alumni network of Vaishali Central School, Vaishali, Bihar. Connect with former classmates and relive cherished memories." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Stay Connected, Stay Inspired" />
                <meta name="twitter:description" content="Reconnect with batchmates, share experiences, and build a thriving alumni community of Vaishali Central School." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <IndexView />
        </IndexController>
    </div>
);

export default IndexPage;