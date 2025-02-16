import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import { UserProvider } from '@/context/userContext'
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
    title: "Alumni | Vaishali Central School | 2025",
    description: "",
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SessionProvider session={pageProps.session}>
                <UserProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </UserProvider>
            </SessionProvider>
        </>
    )
}

export default MyApp
