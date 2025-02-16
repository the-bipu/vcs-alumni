import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import JoinUs from '@/components/common/JoinUs';
import { useForm } from 'react-hook-form';
import { UserContext } from '@/context/userContext';

export default function Guidance() {
    const { register, handleSubmit } = useForm();
    const { setActiveTab } = useContext(UserContext);
    useEffect(() => {
        setActiveTab('guidance');
    }, [setActiveTab]);

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Career Guidance | Vaishali Central School Alumni</title>
                <meta name="description" content="Gain career insights, mentorship, and professional guidance from Vaishali Central School alumni. Learn from industry experts and shape your future." />
                <meta name="keywords" content="Career guidance, alumni mentorship, Vaishali Central School, professional growth, career counseling, networking" />
                <meta name="author" content="alumni.vaishalicentralschool.com" />

                <meta property="og:title" content="Career Guidance | Vaishali Central School Alumni" />
                <meta property="og:description" content="Explore career opportunities, mentorship programs, and expert guidance from successful Vaishali Central School alumni." />
                <meta property="og:image" content="/logo/og-career.png" />
                <meta property="og:url" content="https://www.alumni.vaishalicentralschool.com/career-guidance" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Career Guidance | Vaishali Central School Alumni" />
                <meta name="twitter:description" content="Connect with experienced alumni for career guidance, industry insights, and mentorship to shape your professional journey." />
                <meta name="twitter:image" content="/logo/og-career.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                            <div className='w-1/2 h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-80 object-cover border-8 border-white rounded-md shadow-md' />
                            </div>
                            <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                                <h1 className='md:text-4xl text-xl font-bold text-[#353535] mb-2'>Career Guidance from Alumni</h1>
                                <p className='text-base text-black text-justify'>
                                    Navigating the journey from school to a successful career can be challenging, but with the right guidance, the path becomes much clearer. Our distinguished alumni, who have excelled in various fields, are here to mentor and support current students and fellow graduates. Their experiences serve as a roadmap to success, providing valuable insights into industry trends, skill development, and career opportunities.
                                    <br /><br />

                                    Learning from those who have walked the same hallways and faced similar challenges offers a unique advantage. Whether you’re aiming for higher studies, entrepreneurship, or a corporate career, the shared wisdom of our alumni can help you make informed decisions and avoid common pitfalls.
                                </p>
                            </div>
                        </div>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center text-base text-black text-justify'>
                            From career counseling sessions to networking events, our alumni-driven initiatives ensure that every student receives the guidance needed to pursue their dreams. Workshops, webinars, and one-on-one mentoring sessions are just a few of the ways in which our alumni contribute to the professional growth of the next generation.
                            <br /><br />

                            We believe in the power of community and continuous learning. By staying connected with our alumni network, students and young graduates gain access to real-world experiences, internship opportunities, and valuable career advice. The mentorship and support system established by our alumni pave the way for professional success.
                            <br /><br />

                            Join us in building a future where knowledge and experience are shared freely, creating a stronger and more connected alumni network. Whether you seek guidance or wish to contribute your expertise, Vaishali Central School's alumni community is the perfect place to learn, grow, and inspire.
                        </div>
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20 bg-[#fafafa]'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center'>

                            <div className='w-full h-auto flex flex-col items-center justify-center text-center'>
                                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Career Guidance Enquiry</h2>
                                <p className='text-base text-[#818181]'>
                                    Need guidance for your career path? Connect with experienced alumni and mentors who can provide insights into various industries, career choices, and skill development.
                                    Fill out the form to get personalized career advice, mentorship, and professional networking opportunities.
                                    Let’s shape a bright future together!
                                </p>
                            </div>


                            <form className='w-full flex flex-col gap-6 py-10 text-black' onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="fullName" className='text-[#525252] text-sm'>Full Name</label>
                                        <input {...register('fullName')} type="text" id='fullName' name='fullName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="class" className='text-[#525252] text-sm'>Class</label>
                                        <input {...register('class')} type="text" id='class' name='class' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="email" className='text-[#525252] text-sm'>Email</label>
                                        <input {...register('email')} type="email" id='email' name='email' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="phone" className='text-[#525252] text-sm'>Phone Number</label>
                                        <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-10'>
                                    <div className='w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="textArea" className='text-[#525252] text-sm'>A brief overview about what kind of guidance you need...</label>
                                        <textarea {...register('textArea')} id="textArea" cols={30} rows={10} className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none'></textarea>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <button type='submit' className='flex items-center justify-center px-4 py-2 bg-[#1967d2] rounded-md text-white'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <JoinUs />

                </div>

            </div>

        </div>
    );
}
