import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { FaqsController } from '@/src/faqs/controller/FaqsController';
import FaqsView from '@/src/faqs/views/FaqsView';

const ContactPage: NextPage = (props) => (
    <div>
        <FaqsController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>FAQs | Vaishali Central School Alumni</title>
                <meta name="description" content="Find answers to common questions about Vaishali Central School Alumni. Learn how to connect, participate in events, and stay engaged with the alumni network." />
                <meta name="keywords" content="Vaishali Central School FAQs, alumni help, frequently asked questions, school alumni support, alumni network assistance" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="FAQs | Vaishali Central School Alumni" />
                <meta property="og:description" content="Got questions? Find answers to frequently asked questions about Vaishali Central School Alumni, including membership, events, and networking opportunities." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/faqs" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="FAQs | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Explore frequently asked questions about Vaishali Central School Alumni. Get the information you need to stay connected and involved." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <FaqsView />
        </FaqsController>
    </div>
);

export default ContactPage;