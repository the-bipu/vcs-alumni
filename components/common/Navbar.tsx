'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
    const router = useRouter();

    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='w-full h-auto py-4 flex items-center justify-center bg-[#fff] text-[#1a1a1a]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-row justify-between items-center relative'>

                <Link href='/' className='cursor-pointer'>
                    <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={200} height={80} className='md:w-28 w-20' />
                </Link>

                <div className='lg:flex hidden flex-row gap-12 text-base font-normal uppercase transition-all'>
                    <span className={`cursor-pointer`} onClick={() => router.push('/')}>Home</span>
                    <span className={`cursor-pointer`} onClick={() => router.push('/services')}>Services</span>
                    <span className={`cursor-pointer`} onClick={() => router.push('/company')}>Company</span>
                    <span className={`cursor-pointer`} onClick={() => router.push('/our-team')}>Our Team</span>
                    <span className={`cursor-pointer`} onClick={() => router.push('/contact')}>Contact Us</span>
                </div>

                <div className='lg:hidden flex py-1'>
                    <Image src='/navbar/dash.svg' alt='dash logo' width={30} height={30} onClick={toggleNavbar} />
                </div>

            </div>

            <div className={`${isActive ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-[100vh] bg-white text-[#1a1a1a] transition-all flex-col items-center gap-4`}>

                <div className='md:w-10/12 w-11/12 h-auto flex flex-row justify-between py-6 items-center gap-5 text-base shadow'>
                    <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={300} height={80} className='md:w-80 w-40' />

                    <div className={`cursor-pointer ${isActive ? 'block' : ''}`} onClick={toggleNavbar}>
                        <Image src='/navbar/cross.svg' alt='dash logo' width={30} height={30} />
                    </div>
                </div>

                <div className='flex flex-col gap-6 items-start w-11/12'>
                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/'); setIsActive(!isActive) }}
                    >
                        Home
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/services'); setIsActive(!isActive) }}
                    >
                        Services
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/company'); setIsActive(!isActive) }}
                    >
                        Company
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointer`}
                        onClick={() => { router.push('/our-team'); setIsActive(!isActive) }}
                    >
                        Our Team
                    </div>

                    <div
                        className={`h-8 w-30 px-3 font-medium text-xl text-left cursor-pointerm'}`}
                        onClick={() => { router.push('/contact'); setIsActive(!isActive) }}
                    >
                        Contact Us
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar