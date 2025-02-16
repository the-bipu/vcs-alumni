import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { UserContext } from '@/context/userContext';
import { CrossIcon, PenBoxIcon } from 'lucide-react';

export default function Account() {
    const { setActiveTab, userData, authenticated } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setActiveTab('account');
    }, [setActiveTab]);

    console.log(userData)

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Account | Vaishali Central School</title>
                <meta name="description" content="Manage your Vaishali Central School alumni account. Update your profile, connect with batchmates, and access exclusive alumni features." />
                <meta name="keywords" content="Vaishali Central School account, alumni login, student portal, profile management, school alumni network" />
                <meta name="author" content="vaishalicentralschool.com" />

                <meta property="og:title" content="Account | Vaishali Central School" />
                <meta property="og:description" content="Access your Vaishali Central School alumni account to stay connected, update your details, and engage with the community." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://www.vaishalicentralschool.com/account" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Account | Vaishali Central School" />
                <meta name="twitter:description" content="Log in to your Vaishali Central School account to manage your profile and connect with fellow alumni." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>

                            {isEditing ? (
                                <div className='w-full h-auto flex flex-row gap-10 items-start justify-start'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-96 object-cover' />
                                    <div className='flex flex-col w-full'>
                                        <div className='flex w-full flex-row items-center justify-between mb-4'>
                                            <h2 className='md:text-4xl text-xl font-bold text-[#353535]'>Update Account</h2>
                                            <CrossIcon onClick={() => setIsEditing(!isEditing)} className='cursor-pointer rotate-45' />
                                        </div>
                                        <p className='text-base text-black text-justify'>
                                            {userData?.email}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full h-auto flex flex-row gap-10 items-start justify-start'>
                                    <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-96 h-96 object-cover' />
                                    <div className='flex flex-col w-full'>
                                        <div className='flex w-full flex-row items-center justify-between mb-4'>
                                            <h2 className='md:text-4xl text-xl font-bold text-[#353535]'>Account Details</h2>
                                            <PenBoxIcon onClick={() => setIsEditing(!isEditing)} className='cursor-pointer' />
                                        </div>
                                        <p className='text-base text-black text-justify'>
                                            {userData?.email}
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
