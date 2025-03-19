import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { FacultyController } from '@/src/faculty/controller/FacultyController';
import FacultyView from '@/src/faculty/views/FacultyView';

const FacultyPage: NextPage = (props) => (
    <FacultyController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Faculty & Staffs | Vaishali Central School Alumni</title>
            <meta name="description" content="Explore the faculty and staff members of Vaishali Central School Alumni. Learn about their contributions, achievements, and impact on the alumni community." />
            <meta name="keywords" content="Vaishali Central School Faculty, school staff, alumni faculty, teaching staff, school educators" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Faculty & Staffs | Vaishali Central School Alumni" />
            <meta property="og:description" content="Discover the dedicated faculty and staff members who have shaped Vaishali Central School Alumni over the years." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/faculty-staffs" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Faculty & Staffs | Vaishali Central School Alumni" />
            <meta name="twitter:description" content="Meet the esteemed faculty and staff members of Vaishali Central School Alumni and their lasting impact on the school community." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <FacultyView />
    </FacultyController>
);

export default FacultyPage;