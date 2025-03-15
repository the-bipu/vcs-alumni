import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const FormContact = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <div className='flex flex-col w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>

            <div className='flex flex-col w-full h-auto justify-center items-center text-center'>
                <div className=' md:text-5xl text-3xl leading-normal text-[#1a1a1a] font-bold'>Let's Connect</div>
                <div className=' text-[#525252] md:text-lg text-base font-light md:leading-loose leading-6'>We're eager to know about your query.</div>
            </div>

            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-start justify-center gap-8 py-10'>

                <div className='md:w-1/2 w-full h-full flex flex-col gap-8 md:items-start items-center justify-center py-6'>
                    <Image src={'/connect/reach-us.png'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover rounded shadow' />
                    <div className='flex md:flex-row flex-col md:gap-10 gap-4 items-center text-[#1a1a1a]'>
                        <Link href='/' className='cursor-pointer'>
                            <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={200} height={80} className='md:w-28 w-24' />
                        </Link>

                        <div className='md:text-left text-center'>
                            <div className='font-bold md:text-3xl text-xl'>Vaishali Central School</div>
                            <div className='font-normal md:text-base text-sm'>(Affiliated to CBSE, New Delhi)</div>
                            <div className='font-medium md:text-base text-sm'>Mahnar Road, Rajason, (Vaishali) Bihar - 844102</div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="fName" className='text-[#525252] text-sm'>First Name</label>
                            <input {...register('fName')} type="text" id='fName' name='fName' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                        <div className='w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="email" className='text-[#525252] text-sm'>Email</label>
                            <input {...register('email')} type="email" id='email' name='email' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                        <div className='w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="phone" className='text-[#525252] text-sm'>Phone Number</label>
                            <input {...register('phone')} type="text" id='phone' name='phone' className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none' required />
                        </div>
                        <div className='w-full flex flex-col items-start justify-center gap-1'>
                            <label htmlFor="textArea" className='text-[#525252] text-sm'>Tell us a brief about your query</label>
                            <textarea {...register('textArea')} id="textArea" cols={30} rows={10} className='w-full border-2 border-[#cbcbcb] p-4 rounded-md outline-none'></textarea>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <button type='submit' className='flex items-center justify-center px-4 py-2 bg-[#1967d2] rounded-md text-white' >Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default FormContact