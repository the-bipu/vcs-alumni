import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { UserContext } from '@/context/userContext';

export default function Admission() {
    const { setActiveTab, currentYear } = useContext(UserContext);

    useEffect(() => {
        setActiveTab('admission');
    }, [setActiveTab]);

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Admission | Vaishali Central School Alumni | {currentYear}</title>
                <meta name="description" content="Enroll your child at Vaishali Central School, Rajason, Mahnar Road - (Vaishali) Bihar. Admissions open for Nursery to Class 10. Apply now for quality education and holistic development." />
                <meta name="keywords" content="Vaishali Central School admission, school admission Bihar, CBSE school admission, apply for school, nursery to class 10 admission" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Admission | Vaishali Central School" />
                <meta property="og:description" content="Admissions open for the new academic session at Vaishali Central School. Join us for a bright future with top-quality education and modern facilities." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/admission" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Admission | Vaishali Central School" />
                <meta name="twitter:description" content="Secure your child's admission at Vaishali Central School. Providing excellence in education from Nursery to Class 10 in Vaishali, Bihar." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <div className='w-full h-auto flex items-center justify-center'>
                        <Image src={'/bg/school-building.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-64 object-cover' />
                    </div>

                    <div className='flex w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center'>

                            <div className='w-full h-auto flex flex-col items-center justify-center text-center'>
                                <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Admission Enquiry Form</h2>
                                <p className='text-base text-[#818181]'>
                                    Interested in enrolling your child at Vaishali Central School? We offer quality education from Nursery to Class 10 with a focus on academic excellence and holistic development.
                                    Contact us today to learn more about our admission process, eligibility, and facilities.
                                </p>
                            </div>

                            <form className='w-full flex flex-col gap-6 py-10' onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="year" className='text-[#525252] text-sm'>Batch</label>
                                        <input {...register('year')} type="text" id='year' name='year' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="class" className='text-[#525252] text-sm'>Class</label>
                                        <input {...register('class')} type="text" id='class' name='class' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="studentName" className='text-[#525252] text-sm'>Student Name</label>
                                        <input {...register('studentName')} type="text" id='studentName' name='studentName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="studentAge" className='text-[#525252] text-sm'>Student Age</label>
                                        <input {...register('studentAge')} type="text" id='studentAge' name='studentAge' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="fatherName" className='text-[#525252] text-sm'>Father's Name</label>
                                        <input {...register('fatherName')} type="fatherName" id='fatherName' name='fatherName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                                    </div>
                                    <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                                        <label htmlFor="motherName" className='text-[#525252] text-sm'>Mother's Name</label>
                                        <input {...register('motherName')} type="text" id='motherName' name='motherName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
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
                                        <label htmlFor="textArea" className='text-[#525252] text-sm'>Residential Address</label>
                                        <textarea {...register('textArea')} id="textArea" cols={30} rows={10} className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none'></textarea>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <button type='submit' className='flex items-center justify-center px-4 py-2 bg-[#1967d2] rounded-md text-white'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}