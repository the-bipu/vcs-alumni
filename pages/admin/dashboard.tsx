import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { AdminController } from '@/src/dashboard/controller/AdminController';
import AdminView from '@/src/dashboard/views/AdminView';

const AdminPage: NextPage = (props) => (
    <AdminController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Admin Dashboard | Vaishali Central School Alumni</title>
            <meta name="description" content="Manage the Vaishali Central School alumni platform. Access admin tools to review alumni data, post updates, and oversee platform activity." />
            <meta name="keywords" content="Vaishali Central School admin, alumni admin dashboard, manage alumni, school admin panel, vcs admin" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Admin Dashboard | Vaishali Central School" />
            <meta property="og:description" content="Control and manage the Vaishali Central School alumni platform. View alumni data, manage content, and ensure smooth operations." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/admin/dashboard" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Admin Dashboard | Vaishali Central School" />
            <meta name="twitter:description" content="Access the admin dashboard of Vaishali Central School alumni platform to manage data and platform activity." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <AdminView />
    </AdminController>
);

export default AdminPage;