import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EnterIcon, ExitIcon, IconJarLogoIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';

const LockedTab = () => {
    const router = useRouter();

    return (
        <div className={`w-full h-auto md:h-screen flex md:flex-row flex-col-reverse items-center justify-center bg-white shadowBorder rounded relative overflow-hidden`}>
            <div className='w-full h-full flex flex-col items-center justify-center gap-6 relative md:py-0 py-10'>
                <div className='shadowBorder bg-white p-4 rounded-md'>
                    <LockClosedIcon className='w-20 h-20' />
                </div>
                <div className='text-center w-10/12 flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-gray-800'>Account Not Verified</h2>
                    <p className='text-gray-600 mt-2'>
                        It seems like you forgot to complete the registration process. Please complete your registration first to access your account page.
                    </p>
                    <Link href={`/auth/register`} className='mt-5'>
                        <Button variant='default' className='flex flex-row items-center justify-center gap-2'>
                            <EnterIcon className='h-6' />
                            Join Us
                        </Button>
                    </Link>
                </div>

                <div className='md:w-10/12 w-11/12 flex flex-row items-center justify-between absolute md:top-10 top-6'>
                    <Button onClick={() => router.push('/')}>
                        <ExitIcon className='w-6' />
                        <span className='md:flex hidden'>Back to Home</span>
                    </Button>
                    <IconJarLogoIcon className='w-5 h-5' />
                </div>
            </div>
        </div>
    )
}

export default LockedTab