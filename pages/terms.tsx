import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { UserContext } from '@/context/userContext';

export default function Terms() {
    const { setActiveTab, currentYear } = useContext(UserContext);

    useEffect(() => {
        setActiveTab('terms');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Terms & Policy | VCS Alumni | Vaishali Central School | {currentYear}</title>
                <meta name="description" content="Read the terms of service and privacy policy for the VCS Alumni network. Understand our policies on data protection, user privacy, and community guidelines." />
                <meta name="keywords" content="VCS Alumni terms, privacy policy, alumni network policies, data protection, user privacy, community guidelines, school alumni" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Terms & Policy | VCS Alumni | Vaishali Central School" />
                <meta property="og:description" content="Review the official terms and policies for the VCS Alumni network, covering privacy, user data, and community guidelines." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/terms" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms & Policy | VCS Alumni | Vaishali Central School" />
                <meta name="twitter:description" content="Learn about the VCS Alumni policies on privacy, user data protection, and community engagement." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-auto flex items-center justify-center relative'>
                        <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
                        <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                            <h1 className='md:text-4xl text-3xl font-bold text-[#353535]'>Terms and Conditions</h1>
                            <div className='text-lg font-medium'>Understand the rules and guidelines for using our website and services.</div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>

                            <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Terms and Conditions</h2>
                            <div className='text-base text-black text-justify flex flex-col gap-4'>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>1. Introduction</div>
                                    <p>🪄 Welcome to Vaishali Central School’s website. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>2. Use of Website</div>
                                    <p>
                                        🪄 This website is intended for students, alumni, parents, and faculty members of Vaishali Central School.
                                        <br />
                                        🪄 You may browse the content, register for an account, and interact with alumni features, subject to compliance with these terms.
                                        <br />
                                        🪄 You agree to use the website only for lawful purposes and in a manner that does not infringe upon the rights of others.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>3. User Accounts and Security</div>
                                    <p>
                                        🪄 When creating an account, you must provide accurate and complete information.
                                        <br />
                                        🪄 You are responsible for maintaining the confidentiality of your login credentials and for any activity that occurs under your account.
                                        <br />
                                        🪄 Vaishali Central School reserves the right to suspend or terminate accounts found to be in violation of these terms.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>4. Content and Intellectual Property</div>
                                    <p>
                                        🪄 All text, images, graphics, and other content on this website are the property of Vaishali Central School, unless otherwise stated.
                                        <br />
                                        🪄 You may not copy, distribute, or modify any content without prior written permission from the school administration.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>5. User Conduct</div>
                                    <p>
                                        By using our website, you agree not to:
                                        <br />
                                        🪄 Post, upload, or share any content that is defamatory, harmful, or offensive.
                                        <br />
                                        🪄 Use the website for any fraudulent or misleading purposes.
                                        <br />
                                        🪄 Attempt to gain unauthorized access to restricted areas of the website.
                                        <br />
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>6. Privacy Policy</div>
                                    <p>
                                        🪄 Your use of this website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>7. Limitation of Liability</div>
                                    <p>
                                        🪄 Vaishali Central School is not responsible for any direct, indirect, or incidental damages resulting from the use of this website.
                                        <br />
                                        🪄 We do not guarantee that the website will be error-free, secure, or uninterrupted at all times.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>8. Modifications to Terms</div>
                                    <p>
                                        🪄 Vaishali Central School reserves the right to modify or update these Terms and Conditions at any time. Continued use of the website after any changes indicates your acceptance of the revised terms.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>9. Governing Law</div>
                                    <p>
                                        🪄 These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of this website will be subject to the jurisdiction of the courts in Bihar.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>10. Contact Information</div>
                                    <p>
                                        🪄 If you have any questions about these Terms and Conditions, please contact us at info@vaishalicentralschool.com.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
