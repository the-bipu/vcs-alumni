'use client';

import { UserContext } from '@/context/userContext';
import { signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
    const { activeTab, authenticated, userData } = useContext(UserContext);

    const [isActive, setIsActive] = useState(false);
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isActive]);

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

                    <div className='flex w-10 h-10 rounded items-center justify-center cursor-pointer shadow'>
                        <Image src='/navbar/dash.svg' alt='dash logo' width={30} height={30} onClick={toggleNavbar} />
                    </div>

                </div>

                <div className={`${isActive ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-white text-[#1a1a1a] transition-all flex-col items-center md:overflow-hidden overflow-y-auto md:pb-0 pb-10 z-50`}>

                    <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center relative py-4'>
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

                        <div className={`flex w-10 h-10 rounded items-center justify-center cursor-pointer shadow ${isActive ? 'block' : ''}`} onClick={toggleNavbar}>
                            <Image src='/navbar/cross.svg' alt='dash logo' width={30} height={30} />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col w-10/12 md:gap-12 gap-2 py-3 text-base font-normal uppercase transition-all border-y border-y-[#acacac]'>
                        <Link href='/' onClick={toggleNavbar}>
                            <div className={activeTab === 'home' ? 'text-blue-700' : ''}>Home</div>
                        </Link>
                        <Link href='/about' onClick={toggleNavbar}>
                            <div className={activeTab === 'about' ? 'text-blue-700' : ''}>About Us</div>
                        </Link>
                        <Link href='/alumni' onClick={toggleNavbar}>
                            <div className={activeTab === 'alumni' ? 'text-blue-700' : ''}>Our Alumni</div>
                        </Link>
                        <Link href='/gallery' onClick={toggleNavbar}>
                            <div className={activeTab === 'gallery' ? 'text-blue-700' : ''}>Gallery</div>
                        </Link>
                        <Link href='/guidance' onClick={toggleNavbar}>
                            <div className={activeTab === 'guidance' ? 'text-blue-700' : ''}>Career Guidance</div>
                        </Link>
                        <Link href='/contact' onClick={toggleNavbar}>
                            <div className={activeTab === 'contact' ? 'text-blue-700' : ''}>Contact Us</div>
                        </Link>
                        {authenticated ? (
                            <Link href='/account' onClick={toggleNavbar}>
                                <div className={activeTab === 'account' ? 'text-blue-700' : ''}>Account</div>
                            </Link>
                        ) : (
                            <Link href='/auth/login' onClick={toggleNavbar}>
                                <div className={activeTab === 'login' ? 'text-blue-700' : ''}>Login</div>
                            </Link>
                        )}
                        <Link href='/' target='_blank'>
                            <div className={activeTab === 'vcs' ? 'text-blue-700' : ''}>VCS Homepage</div>
                        </Link>
                        {authenticated && (
                            <div className='cursor-pointer' onClick={() => { signOut(); toggleNavbar }}>Sign Out</div>
                        )}
                    </div>

                    <div className='w-10/12 h-auto flex flex-col mt-6 uppercase'>

                        <p className='mb-2 text-[#000] text-lg font-semibold'>Useful Links</p>
                        <div className='flex md:flex-row flex-col w-full md:gap-12 gap-2 py-3 text-base font-normal uppercase transition-all border-y border-y-[#acacac]'>
                            <Link href='/auth/login'>Login & Register</Link>
                            <Link href='/gallery'>Gallery</Link>
                            <Link href='/about'>About AA</Link>
                            <Link href='/events'>Events & Updates</Link>
                            <Link href='/terms'>Terms & Conditions</Link>
                            <Link href='/privacy'>Privacy Policy</Link>
                        </div>

                        <p className='mb-2 mt-6 text-[#000] text-lg font-semibold'>Facilities</p>
                        <div className='flex md:flex-row flex-col w-full md:gap-12 gap-2 py-3 text-base font-normal uppercase transition-all border-y border-y-[#acacac]'>
                            <Link href='/facility/classrooms'>Classrooms</Link>
                            <Link href='/facility/library'>Library</Link>
                            <Link href='/facility/computer-labs'>Computer Lab</Link>
                            <Link href='/facility/playground'>Playground</Link>
                            <Link href='/facility/laboratory'>Laboratory</Link>
                            <Link href='/facility/seminar-room'>Seminar Room</Link>
                        </div>

                        <p className='mb-2 mt-6 text-[#000] text-lg font-semibold'>Other Links</p>
                        <div className='flex md:flex-row flex-col w-full md:gap-12 gap-2 py-3 text-base font-normal uppercase transition-all border-y border-y-[#acacac]'>
                            <Link href='/testimonial'>Testimonial</Link>
                            <Link href='/faqs'>Faqs</Link>
                            <Link href='/queries'>General Queries</Link>
                            <Link href='/admission'>Admission</Link>
                            <Link href='https://vaishalicentralschool.vercel.app' target='_blank'>Webpage</Link>
                            <Link href='/developers'>Website Team</Link>
                        </div>

                    </div>
                </div>

            </div>

            <div className='w-full h-auto flex flex-col items-center justify-center bg-white text-[#1a1a1a] shadow border-t border-t-[#acacac]'>
                <div className='lg:flex hidden flex-row w-10/12 gap-12 py-3 text-base font-normal uppercase transition-all'>
                    <Link href='/'>
                        <div className={activeTab === 'home' ? 'text-blue-700' : ''}>Home</div>
                    </Link>
                    <Link href='/about'>
                        <div className={activeTab === 'about' ? 'text-blue-700' : ''}>About Us</div>
                    </Link>
                    <Link href='/alumni'>
                        <div className={activeTab === 'alumni' ? 'text-blue-700' : ''}>Our Alumni</div>
                    </Link>
                    <Link href='/gallery'>
                        <div className={activeTab === 'gallery' ? 'text-blue-700' : ''}>Gallery</div>
                    </Link>
                    <Link href='/guidance'>
                        <div className={activeTab === 'guidance' ? 'text-blue-700' : ''}>Career Guidance</div>
                    </Link>
                    <Link href='/contact'>
                        <div className={activeTab === 'contact' ? 'text-blue-700' : ''}>Contact Us</div>
                    </Link>
                    {authenticated ? (
                        <Link href='/account'>
                            <div className={activeTab === 'account' ? 'text-blue-700' : ''}>Account</div>
                        </Link>
                    ) : (
                        <Link href='/auth/login'>
                            <div className={activeTab === 'login' ? 'text-blue-700' : ''}>Login</div>
                        </Link>
                    )}
                    <Link href='/' target='_blank'>
                        <div className={activeTab === 'vcs' ? 'text-blue-700' : ''}>VCS Homepage</div>
                    </Link>
                    {authenticated && (
                        <div className='cursor-pointer' onClick={() => signOut()}>Sign Out</div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Navbar