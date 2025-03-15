import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { QueriesController } from '@/src/queries/controller/QueriesController';
import QueriesView from '@/src/queries/views/QueriesView';

const QueriesPage: NextPage = (props) => (
    <div>
        <QueriesController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>General Queries | Vaishali Central School Alumni</title>
                <meta name="description" content="Have questions about Vaishali Central School Alumni? Find answers to common queries regarding membership, events, networking, and alumni benefits." />
                <meta name="keywords" content="Vaishali Central School General Queries, alumni support, school alumni FAQs, alumni help, alumni assistance" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="General Queries | Vaishali Central School Alumni" />
                <meta property="og:description" content="Need help? Explore answers to common queries about Vaishali Central School Alumni, including registration, events, and staying connected." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/queries" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="General Queries | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Get answers to frequently asked questions about Vaishali Central School Alumni, from joining the community to participating in events." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <QueriesView />
        </QueriesController>
    </div>
);

export default QueriesPage;