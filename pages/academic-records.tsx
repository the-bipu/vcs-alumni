import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { AcademicController } from '@/src/academic/controller/AcademicController';
import AcademicView from '@/src/academic/views/AcademicView';

const AcademicPage: NextPage = (props) => (
    <AcademicController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Academic Records | Vaishali Central School Alumni</title>
            <meta name="description" content="Explore the academic records of Vaishali Central School, highlighting student achievements, performance metrics, and our commitment to educational excellence." />
            <meta name="keywords" content="Academic Records, Vaishali Central School, student achievements, exam results, CBSE performance, education standards" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Academic Records | Vaishali Central School | Excellence in Education" />
            <meta property="og:description" content="View the academic performance of Vaishali Central School students, including exam results, achievements, and performance reports." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/academic-records" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Academic Records | Vaishali Central School | Excellence in Education" />
            <meta name="twitter:description" content="Discover the academic records of Vaishali Central School, showcasing student excellence and performance in various subjects and exams." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <AcademicView />
    </AcademicController>
);

export default AcademicPage;