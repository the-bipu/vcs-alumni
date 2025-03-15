import React from 'react';

const PrivacyPolicy = () => {
    return (
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
    )
}

export default PrivacyPolicy