import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import '../app/globals.css'
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
    title: "Vaishali Central School | 2025",
    description: "",
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
