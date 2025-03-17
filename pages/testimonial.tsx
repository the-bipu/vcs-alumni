import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { TestimonialController } from '@/src/testimonial/controller/TestimonialController';
import TestimonialView from '@/src/testimonial/views/TestimonialView';

const TestimonialPage: NextPage = (props) => (
    <TestimonialController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Testimonial | Vaishali Central School Alumni</title>
            <meta name="description" content="Read inspiring testimonials from Vaishali Central School alumni. Discover their experiences, achievements, and how the school shaped their journey." />
            <meta name="keywords" content="Vaishali Central School testimonials, alumni success stories, school experiences, student testimonials, alumni feedback" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Testimonial | Vaishali Central School Alumni" />
            <meta property="og:description" content="Explore heartfelt testimonials from Vaishali Central School alumni, sharing their success stories and cherished memories." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/testimonial" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Testimonial | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Hear from Vaishali Central School alumni about their experiences, career paths, and how the school contributed to their growth." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <TestimonialView />
    </TestimonialController>
);

export default TestimonialPage;