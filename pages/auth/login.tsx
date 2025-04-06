import Loader from '@/components/common/Loader';
import Login from '@/components/common/Login'
import MiniNav from '@/components/common/MiniNav';
import { UserContext } from '@/context/userContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'

const LoginPage = () => {
    const { setActiveTab, loading, authenticated } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        setActiveTab('login');

        if (authenticated) {
            router.push('/account');
        }
    }, [setActiveTab, authenticated]);

    return (
        <React.Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Login or Register | Vaishali Central School Alumni | Access Your Alumni Network</title>
                <meta name="google-site-verification" content="IglenbFjY-IMapS880ujO1AWTLZ-PZjAe8uWRYU-hjE" />
                <meta name="description" content="Log in or create your account to connect with the Vaishali Central School Alumni community. Stay updated, explore opportunities, and engage with fellow alumni." />
                <meta name="keywords" content="VCS login, VCS register, Vaishali Central School Alumni sign in, alumni portal access, VCS account, join VCS network" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Login or Register | Vaishali Central School Alumni | Access Your Alumni Network" />
                <meta property="og:description" content="Sign in or create an account to access the Vaishali Central School Alumni portal. Stay connected and make the most of your alumni network." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/auth/login" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Login or Register | Vaishali Central School Alumni | Access Your Alumni Network" />
                <meta name="twitter:description" content="Connect with the Vaishali Central School Alumni network by logging in or registering your account." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            {loading && <Loader />}
            <MiniNav />
            <Login />
        </React.Fragment>
    )
}

export default LoginPage