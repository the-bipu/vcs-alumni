import { teams } from '@/components/assets/teams'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Developers = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <div className='w-full h-auto flex flex-col items-start gap-2'>
                    <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>Website Team</h1>
                    <p className='text-base text-justify text-black'>
                        Meet the dedicated team behind the Vaishali Central School Alumni website. Our passionate members work tirelessly to maintain and enhance this platform, ensuring a seamless experience for alumni to connect, share, and stay updated.
                    </p>
                </div>
                <div className='w-full h-auto flex flex-row flex-wrap items-center md:justify-between justify-center gap-8'>

                    {teams.map((item: any, index: any) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <Image src={item.image} alt='sphere' width={288} height={288} priority={true} className='w-72 h-72 transition-all border-8 border-white shadow rounded-full object-cover grayscale hover:grayscale-0' />
                            <div className='flex flex-col text-center'>
                                <Link href={`/developers/${item?.link}`}>
                                    <div className='text-xl font-semibold cursor-pointer text-black transition-all hover:underline'>{item?.name}</div>
                                </Link>
                                <div className='text-blue-700 text-base font-medium'>{item?.position}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Developers