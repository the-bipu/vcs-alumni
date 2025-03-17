import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { ResourcesController } from '@/src/resources/controller/ResourcesController';
import ResourcesView from '@/src/resources/views/ResourcesView';

const ResourcePage: NextPage = (props) => (
    <ResourcesController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Online Resources | Vaishali Central School Alumni | Learning Beyond Classrooms</title>
            <meta name="description" content="Access online resources from Vaishali Central School, including study materials, e-books, assignments, and learning tools for students and teachers." />
            <meta name="keywords" content="Online Resources, Vaishali Central School, e-learning, study materials, educational tools, assignments, e-books" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Online Resources | Vaishali Central School | Learning Beyond Classrooms" />
            <meta property="og:description" content="Explore Vaishali Central School’s online resources for students and teachers, featuring digital study materials, e-books, and learning tools." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/online-resources" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Online Resources | Vaishali Central School | Learning Beyond Classrooms" />
            <meta name="twitter:description" content="Find valuable online study resources from Vaishali Central School, including digital learning tools, e-books, and educational materials." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <ResourcesView />
    </ResourcesController>
);

export default ResourcePage;