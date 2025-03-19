import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { stories } from '@/components/assets/stories';
import { Button } from '@/components/ui/button';

const Stories = () => {
    return (
        <div className='flex flex-col gap-24 w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>

            {stories.map((item, index) => (
                <div key={index} className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-10'>
                    <Image src={item.image} alt='connect' width={550} height={550} priority={true} className='shadow-md w-80 h-80 object-cover rounded-md' />
                    <div className='w-full h-auto flex flex-col items-start justify-between'>
                        <h3 className='md:text-4xl text-3xl font-bold text-[#353535] md:mb-2 mb-4'>{item.title}</h3>
                        <div className='text-justify text-black mb-4'>
                            {item.about.map((story, index) => (
                                <span key={index}>
                                    {story}
                                    <br />
                                </span>
                            ))}
                        </div>
                        <Link href={item.link}>
                            <Button variant={'rounded'} className='text-base'>
                                Read More
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Stories