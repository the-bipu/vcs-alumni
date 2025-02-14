import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'

export const metadata: Metadata = {
    title: "Digital Protein | 2025",
    description: "Generated by create next app",
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
