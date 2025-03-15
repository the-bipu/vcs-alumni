import React from 'react';
import Head from 'next/head';

import type { GetServerSideProps, NextPage } from 'next';
import { AlumniController } from '@/src/alumni/controller/AlumniController';
import AlumniView from '@/src/alumni/views/AlumniView';

interface AlumniData {
    email: string;
    phone: string;
    fullName: string;
    profile: string;
    gender: string;
    bio: string;
    dob: string;
    joiningYear: string;
    passingYear: string;
    userType: string;
    accountType: string;
    position: string;
}

interface AlumniPageProps {
    alumniData: AlumniData[];
}

const AlumniPage: React.FC<AlumniPageProps> = ({ alumniData }) => {
    return (
        <AlumniController alumniData={alumniData}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Our Alumni | Vaishali Central School | Connect, Inspire, Grow</title>
                <meta name="description" content="Stay connected with the vibrant alumni network of Vaishali Central School. Celebrate achievements, share experiences, and strengthen lifelong bonds." />
                <meta name="keywords" content="Vaishali Central School Alumni, alumni network, VCS alumni, school alumni, reconnect, Bihar alumni, alumni association, alumni success stories" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta property="og:description" content="Join the VCS Alumni Association and be part of a thriving community that celebrates success, fosters connections, and supports future generations." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/alumni" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vaishali Central School Alumni | Connect, Inspire, Grow" />
                <meta name="twitter:description" content="Reconnect with batchmates, celebrate achievements, and build a strong alumni community with Vaishali Central School." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <AlumniView alumniData={alumniData} />
        </AlumniController>
    );
};

export default AlumniPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MAIN_ROUTE}/api/users/diamond`);
    const alumniData: AlumniData[] = await res.json();

    return {
        props: { alumniData },
    };
};