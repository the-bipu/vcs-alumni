import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { AdmissionController } from '@/src/admission/controller/AdmissionController';
import AdmissionView from '@/src/admission/views/AdmissionView';

const AdmissionPage: NextPage = (props) => (
    <AdmissionController {...props}>
        <Head>
            <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
            <title>Admission | Vaishali Central School Alumni</title>
            <meta name="description" content="Enroll your child at Vaishali Central School, Rajason, Mahnar Road - (Vaishali) Bihar. Admissions open for Nursery to Class 10. Apply now for quality education and holistic development." />
            <meta name="keywords" content="Vaishali Central School admission, school admission Bihar, CBSE school admission, apply for school, nursery to class 10 admission" />
            <meta name="author" content="vcs-alumni.vercel.app" />

            <meta property="og:title" content="Admission | Vaishali Central School" />
            <meta property="og:description" content="Admissions open for the new academic session at Vaishali Central School. Join us for a bright future with top-quality education and modern facilities." />
            <meta property="og:image" content="/logo/og-vcs.png" />
            <meta property="og:url" content="https://vcs-alumni.vercel.app/admission" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Admission | Vaishali Central School" />
            <meta name="twitter:description" content="Secure your child's admission at Vaishali Central School. Providing excellence in education from Nursery to Class 10 in Vaishali, Bihar." />
            <meta name="twitter:image" content="/logo/og-vcs.png" />
        </Head>

        <AdmissionView />
    </AdmissionController>
);

export default AdmissionPage;