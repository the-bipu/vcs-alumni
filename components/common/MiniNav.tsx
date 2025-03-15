'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const MiniNav = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='flex flex-col w-full h-auto shadow'>
            <div className='w-full h-auto py-4 flex items-center justify-center bg-[#fff] text-[#1a1a1a]'>

                <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center relative'>

                    <div className='flex md:flex-row flex-col md:gap-10 gap-4 items-center'>
                        <Link href='/' className='cursor-pointer'>
                            <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={200} height={80} className='md:w-28 w-24' />
                        </Link>

                        <div className='md:flex hidden flex-col text-left'>
                            <div className='font-bold text-3xl'>Alumni - Vaishali Central School</div>
                            <div className='font-normal'>(Affiliated to CBSE, New Delhi)</div>
                            <div className='font-medium'>Mahnar Road, Rajason, (Vaishali) Bihar - 844102</div>
                        </div>

                        <div className='md:hidden flex flex-col text-center'>
                            <div className='font-bold text-2xl'>Alumni</div>
                            <div className='font-bold text-2xl'>Vaishali Central School</div>
                            <div className='font-normal text-sm'>(Affiliated to CBSE, New Delhi)</div>
                            <div className='font-medium text-sm'>Mahnar Road, Rajason, (Vaishali) Bihar - 844102</div>
                        </div>
                    </div>

                    <Link href='/' className='flex w-10 h-10 rounded items-center justify-center cursor-pointer shadow' onClick={toggleNavbar}>
                        <HamburgerMenuIcon className='w-5 h-5' />
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default MiniNav