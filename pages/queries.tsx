import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { UserContext } from '@/context/userContext';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { careerFaqs } from '@/components/assets/careerFaqs';

export default function Gallery() {
    const { setActiveTab, currentYear } = useContext(UserContext);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setActiveTab('queries');
    }, [setActiveTab]);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>General Queries | Vaishali Central School Alumni | {currentYear}</title>
                <meta name="description" content="Have questions about Vaishali Central School Alumni? Find answers to common queries regarding membership, events, networking, and alumni benefits." />
                <meta name="keywords" content="Vaishali Central School General Queries, alumni support, school alumni FAQs, alumni help, alumni assistance" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="General Queries | Vaishali Central School Alumni" />
                <meta property="og:description" content="Need help? Explore answers to common queries about Vaishali Central School Alumni, including registration, events, and staying connected." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/queries" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="General Queries | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Get answers to frequently asked questions about Vaishali Central School Alumni, from joining the community to participating in events." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex w-full h-auto items-center justify-center py-20 bg-[#eaeaea]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>

                            <div className='w-full h-auto flex flex-col items-center justify-center text-center'>
                                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>General Queries</h2>
                                <div className="relative flex flex-col items-center justify-center text-left pb-6">
                                    {careerFaqs?.map((item: any, index: any) => (
                                        <div
                                            className="md:w-9/12 w-11/12 rounded-xl py-3 md:px-6 px-4 my-3 cursor-pointer bg-white shadow"
                                            key={index}
                                            onClick={() => toggle(index)}
                                        >
                                            <div className="pb-1 flex items-center justify-between">
                                                <p className="pr-4 text-[#000000] md:text-lg text-base font-medium">{item.que}</p>
                                                {selected === index ? (
                                                    <CaretUpIcon className='w-6 h-6 text-black transition-all duration-300 rotate-0' />
                                                ) : (
                                                    <CaretUpIcon className='w-6 h-6 text-black transition-all duration-300 rotate-180' />
                                                )}
                                            </div>
                                            <div
                                                className={
                                                    selected === index
                                                        ? "overflow-hidden transition-all md:py-4 py-3 max-h-96 ease-out duration-700 text-[#6F7680] text-base font-medium"
                                                        : "overflow-hidden transition-all max-h-0 duration-300 text-[#6F7680]"
                                                }
                                            >
                                                <p>{item.ans}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}