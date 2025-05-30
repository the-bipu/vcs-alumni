import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { EnterIcon, ExitIcon, LapTimerIcon, StopwatchIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';

const WrongSession = ({ countdown }: any) => {
    const router = useRouter();

    return (
        <div className={`w-full h-auto md:h-screen flex md:flex-row flex-col items-center justify-center relative bg-[#fff] overflow-hidden`}>
            <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-6 relative md:py-0 py-10'>
                <div className='bg-white p-6 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'>
                    <LapTimerIcon className='w-16 h-16' />
                </div>
                <div className='text-center w-10/12 flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-gray-800'>Session Expired</h2>
                    <p className='text-gray-600 mt-2'>
                        Oops! It looks like your session has expired. Please log in again to access your account. You'll be redirected to the login page in a few seconds. If not, click the button below to proceed.
                    </p>
                    <Link href={`/auth/register`} className='mt-3'>
                        <Button variant='outline' className='flex flex-row items-center justify-center gap-2'>
                            <EnterIcon className='h-6' />
                            Login / Register
                        </Button>
                    </Link>
                </div>

                <div className='md:w-10/12 w-11/12 flex flex-row items-center justify-between absolute md:top-10 top-6'>
                    <Button onClick={() => router.push('/')}>
                        <ExitIcon className='w-6' />
                        <span className='md:flex hidden'>Back to Home</span>
                    </Button>
                    <Button>
                        <StopwatchIcon className='w-6' />
                        <span>{countdown}</span>
                    </Button>
                </div>
            </div>
            <Image src={'/timeout/finding-path.svg'} alt='finding session' width={400} height={300} className='w-full md:w-1/2 md:h-full h-72 object-cover rounded' />
        </div>
    )
}

export default WrongSession