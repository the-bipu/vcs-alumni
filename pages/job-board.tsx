import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { JobsController } from '@/src/jobs/controller/JobsController';
import JobsView from '@/src/jobs/views/JobsView';

const JobsPage: NextPage = (props) => (
    <div>
        <JobsController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Job Board | Vaishali Central School Alumni | Find Opportunities, Build Your Career</title>
                <meta name="google-site-verification" content="IglenbFjY-IMapS880ujO1AWTLZ-PZjAe8uWRYU-hjE" />
                <meta name="description" content="Explore job opportunities, internships, and career resources exclusively for Vaishali Central School alumni. Kickstart your career today!" />
                <meta name="keywords" content="Vaishali Central School Jobs, alumni job board, career opportunities, internships, VCS job listings, Bihar jobs" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Vaishali Central School Job Board | Find Opportunities, Build Your Career" />
                <meta property="og:description" content="Browse job openings and career opportunities tailored for Vaishali Central School alumni. Connect with employers and grow your career." />
                <meta property="og:image" content="/logo/job-board-og.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/job-board" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Job Board | Find Opportunities, Build Your Career" />
                <meta name="twitter:description" content="Find the latest job listings, career resources, and internship programs exclusively for Vaishali Central School alumni." />
                <meta name="twitter:image" content="/logo/job-board-og.png" />
            </Head>

            <JobsView />
        </JobsController>
    </div>
);

export default JobsPage;