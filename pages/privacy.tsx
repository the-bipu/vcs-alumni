import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { UserContext } from '@/context/userContext';

export default function Privacy() {
    const { setActiveTab, currentYear } = useContext(UserContext);

    useEffect(() => {
        setActiveTab('privacy');
    }, [setActiveTab]);

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Privacy Policy | VCS Alumni | Vaishali Central School | {currentYear}</title>
                <meta name="description" content="Review the privacy policy for the VCS Alumni network. Learn how we collect, use, and protect user data while ensuring a secure and respectful community experience." />
                <meta name="keywords" content="VCS Alumni privacy policy, alumni data protection, user privacy, community guidelines, data security, school alumni policies" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Privacy Policy | VCS Alumni | Vaishali Central School" />
                <meta property="og:description" content="Understand how the VCS Alumni network safeguards user data, maintains privacy, and enforces community guidelines." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/privacy" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy | VCS Alumni | Vaishali Central School" />
                <meta name="twitter:description" content="Learn how the VCS Alumni network ensures user data privacy, security, and responsible data handling." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-auto flex items-center justify-center relative'>
                        <Image src={'/bg/header-vcs.png'} alt='page header vcs' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
                        <div className='absolute flex flex-col gap-2 items-center justify-center text-black text-center'>
                            <h1 className='md:text-4xl text-3xl font-bold text-[#353535]'>Privacy Policy</h1>
                            <div className='text-lg font-medium'>Learn how we protect your data and ensure your privacy.</div>
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>

                            <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Privacy Policy</h2>
                            <div className='text-base text-black text-justify flex flex-col gap-4'>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>1. Introduction</div>
                                    <p>
                                        🪄 Vaishali Central School respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>2. Information We Collect</div>
                                    <p>
                                        🪄 When you visit our website, we may collect personal information, including but not limited to:
                                        <br />
                                        🪄 Your name, email address, and phone number (if provided by you).
                                        <br />
                                        🪄 Information related to your interactions with our website.
                                        <br />
                                        🪄 Technical data such as IP address, browser type, and cookies.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>3. How We Use Your Information</div>
                                    <p>
                                        🪄 We use the collected data for the following purposes:
                                        <br />
                                        🪄 To provide and improve our website services.
                                        <br />
                                        🪄 To communicate with you regarding updates, events, or important notices.
                                        <br />
                                        🪄 To analyze user behavior and improve user experience.
                                        <br />
                                        🪄 To ensure the security of our website and protect against fraud.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>4. Cookies and Tracking Technologies</div>
                                    <p>
                                        🪄 Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, but some functionalities may be affected.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>5. Data Security</div>
                                    <p>
                                        🪄 We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>6. Third-Party Links</div>
                                    <p>
                                        🪄 Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their privacy policies before providing any personal data.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>7. Data Retention</div>
                                    <p>
                                        🪄 We retain your data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>8. Your Rights</div>
                                    <p>
                                        🪄 You have the right to:
                                        <br />
                                        🪄 Request access to your personal data.
                                        <br />
                                        🪄 Request corrections or deletions of your data.
                                        <br />
                                        🪄 Opt-out of communications at any time.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>9. Updates to This Policy</div>
                                    <p>
                                        🪄 We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the website constitutes acceptance of the updated policy.
                                    </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-bold'>10. Contact Information</div>
                                    <p>
                                        🪄 If you have any questions regarding this Privacy Policy, please contact us at info@vaishalicentralschool.com.
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