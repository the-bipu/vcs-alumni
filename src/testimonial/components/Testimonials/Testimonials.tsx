import { testimonial } from '@/components/assets/testimonial';
import React from 'react';

const Testimonials = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20  border-b border-b-[#acacac]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <div className='w-full h-auto flex flex-col items-start gap-2'>
                    <h1 className='md:text-4xl text-xl font-bold text-[#353535] capitalize'>Testimonials from the Students</h1>
                    <p className='text-base text-justify text-black'>
                        Hear from our alumni as they share their experiences, memories, and the impact Vaishali Central School has had on their lives. Their stories reflect the values, friendships, and lessons that continue to inspire them beyond school.
                    </p>
                </div>

                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-between gap-8'>
                    {testimonial.map((item, index) => (
                        <div key={index} className={`w-auto flex flex-col rounded-xl border p-8 bg-[#eaeaea]`}>

                            <div className='w-full flex flex-col justify-center items-start'>

                                <div className='flex flex-row items-center justify-center gap-4'>
                                    <div className=' w-20 h-20 text-6xl bg-black text-white font-semibold rounded-md flex items-center justify-center'>{item.name.slice(0, 1)}</div>
                                    <div className='w-auto flex flex-col justify-center items-start'>
                                        <div className='text-lg font-normal text-[#202124]'>{item.name}</div>
                                        <div className='text-[#2d2d2d] font-light text-sm'>{item.post}</div>
                                    </div>
                                </div>

                                <div className='md:text-xl text-lg font-medium text-[#202124] mt-8 md:leading-8 leading-7 w-full'>{item.message}</div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials