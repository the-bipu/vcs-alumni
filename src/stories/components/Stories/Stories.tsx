import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Stories = () => {
    return (
        <div className='flex flex-col gap-24 w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>

            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-10'>
                <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-80 h-80 object-cover rounded-md' />
                <div className='w-full h-auto flex flex-col items-start justify-between'>
                    <h3 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>From Classroom to Global Impact: The Journey of Rahul Sharma</h3>
                    <div className='text-justify text-black mb-4'>
                        Rahul Sharma, a proud alumnus of Vaishali Central School, always had a vision of making a difference in the world. After completing his studies, he pursued a career in environmental sustainability, working with global organizations to combat climate change.

                        <br />
                        <br />

                        Rahul’s journey is a testament to how Vaishali Central School nurtures not just students but future leaders. His success is a reflection of the school's commitment to excellence and social responsibility. 🚀🌍
                    </div>
                    <Link href={'/'}>
                        <Button variant={'rounded'} className='text-base'>
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-10'>
                <Image src={'/connect/join-us.jpg'} alt='connect' width={550} height={550} priority={true} className='shadow-md w-80 h-80 object-cover rounded-md' />
                <div className='w-full h-auto flex flex-col items-start justify-between'>
                    <h3 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>From Classroom to Global Impact: The Journey of Rahul Sharma</h3>
                    <div className='text-justify text-black mb-4'>
                        Rahul Sharma, a proud alumnus of Vaishali Central School, always had a vision of making a difference in the world. After completing his studies, he pursued a career in environmental sustainability, working with global organizations to combat climate change.

                        <br />
                        <br />

                        Rahul’s journey is a testament to how Vaishali Central School nurtures not just students but future leaders. His success is a reflection of the school's commitment to excellence and social responsibility. 🚀🌍
                    </div>
                    <Link href={'/'}>
                        <Button variant={'rounded'} className='text-base'>
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Stories