import React from 'react';
import { useForm } from 'react-hook-form';

const DonationForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <div className='flex w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center text-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Donation Request Form</h2>
                    <p className='text-base text-[#818181]'>
                        Your generosity helps us support alumni initiatives and community programs. Fill out the form below to request a donation or contribute to our cause.
                    </p>
                </div>

                <form className='w-full flex flex-col gap-6 py-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="fullName" className='text-[#525252] text-sm'>Full Name</label>
                            <input {...register('fullName')} type="text" id='fullName' name='fullName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="email" className='text-[#525252] text-sm'>Email</label>
                            <input {...register('email')} type="email" id='email' name='email' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="phone" className='text-[#525252] text-sm'>Phone Number</label>
                            <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="amount" className='text-[#525252] text-sm'>Donation Amount (₹)</label>
                            <input {...register('amount')} type="number" id='amount' name='amount' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col md:gap-10 gap-6'>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="purpose" className='text-[#525252] text-sm'>Purpose of Donation</label>
                            <select {...register('purpose')} id="purpose" className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required>
                                <option value="">Select Purpose</option>
                                <option value="scholarships">Scholarships</option>
                                <option value="infrastructure">Infrastructure Development</option>
                                <option value="events">Alumni Events</option>
                                <option value="charity">Charity & Social Initiatives</option>
                            </select>
                        </div>
                        <div className='md:w-1/2 w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="paymentMethod" className='text-[#525252] text-sm'>Preferred Payment Method</label>
                            <select {...register('paymentMethod')} id="paymentMethod" className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required>
                                <option value="">Select Payment Method</option>
                                <option value="upi">UPI</option>
                                <option value="bank_transfer">Bank Transfer</option>
                                <option value="credit_card">Credit/Debit Card</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label htmlFor="message" className='text-[#525252] text-sm'>Message (Optional)</label>
                        <textarea {...register('message')} id="message" cols={30} rows={5} className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' placeholder="Leave a message for the cause..."></textarea>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <button type='submit' className='flex items-center justify-center px-4 py-2 bg-[#1967d2] rounded-md text-white'>Submit Request</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default DonationForm;
