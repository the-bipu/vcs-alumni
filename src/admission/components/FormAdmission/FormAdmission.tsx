import React from 'react';
import { useForm } from 'react-hook-form';

const FormAdmission = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
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
    )
}

export default FormAdmission