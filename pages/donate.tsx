import React from 'react';
import Head from 'next/head';

import type { NextPage } from 'next';
import { DonateController } from '@/src/donate/controller/DonateController';
import DonateView from '@/src/donate/views/DonateView';

const DonatePage: NextPage = (props) => (
  <DonateController {...props}>
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
      <title>Donate | Vaishali Central School Alumni</title>
      <meta name="description" content="Support Vaishali Central School Alumni by making a donation. Your contributions help fund alumni events, scholarships, and community initiatives." />
      <meta name="keywords" content="donate to Vaishali Central School, alumni donations, support school alumni, Vaishali Central School fundraising" />
      <meta name="author" content="vcs-alumni.vercel.app" />

      <meta property="og:title" content="Donate | Vaishali Central School Alumni" />
      <meta property="og:description" content="Contribute to the Vaishali Central School Alumni community. Your donations help us organize events, provide scholarships, and support school development." />
      <meta property="og:image" content="/logo/og-vcs.png" />
      <meta property="og:url" content="https://vcs-alumni.vercel.app/donate" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Donate | Vaishali Central School Alumni" />
      <meta name="twitter:description" content="Make a meaningful impact by donating to Vaishali Central School Alumni. Help us support students, alumni, and school initiatives." />
      <meta name="twitter:image" content="/logo/og-vcs.png" />
    </Head>


    <DonateView />
  </DonateController>
);

export default DonatePage;