import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'

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
                    <Component {...pageProps} />
                </UserProvider>
            </SessionProvider>
        </>
    )
}

export default MyApp
