import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { ContactController } from '@/src/contact/controller/ContactController';
import ContactView from '@/src/contact/views/ContactView';

const ContactPage: NextPage = (props) => (
    <div>
        <ContactController {...props}>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Contact | Vaishali Central School | Get in Touch</title>
                <meta name="description" content="Reach out to Vaishali Central School for inquiries, admissions, and support. Find our contact details, location, and ways to connect with us." />
                <meta name="keywords" content="Vaishali Central School contact, school address, school phone number, admission inquiry, Bihar school, get in touch" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Contact Vaishali Central School | Get in Touch" />
                <meta property="og:description" content="Have questions? Contact Vaishali Central School for admissions, general inquiries, and assistance. We are here to help!" />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/contact" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Vaishali Central School | Get in Touch" />
                <meta name="twitter:description" content="Looking to connect with Vaishali Central School? Get in touch with us for admissions, support, and more." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <ContactView />
        </ContactController>
    </div>
);

export default ContactPage;