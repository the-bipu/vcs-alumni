import React, { useContext, useState } from 'react'
import { Button } from '../ui/button';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { UserContext } from '@/context/userContext';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { authenticated, userData } = useContext(UserContext);

    return (
        <div className='flex flex-col w-full h-full py-20 items-center justify-center'>

            <div className='md:w-10/12 w-11/12 h-full flex md:flex-row flex-col items-center justify-center overflow-hidden'>

                <div className='md:w-1/2 w-full h-full flex flex-col items-center justify-center text-center'>
                    {isLogin ? (
                        <div className='w-auto flex flex-col items-center justify-center'>
                            <div className='text-xl font-medium mb-6'>Login Here</div>

                            <Button type='submit' variant='default' onClick={() => { signIn("google"); }} className="w-full flex flex-row gap-2 mb-6">
                                <FaGoogle className="text-lg" />
                                Login with Google
                            </Button>

                            <div>Don't have an account? <span className='cursor-pointer font-semibold transition-all hover:underline' onClick={() => setIsLogin(!isLogin)}>Register</span> here;</div>
                        </div>
                    ) : (
                        <div className='w-auto flex flex-col items-center justify-center'>
                            <div className='text-xl font-medium mb-6'>Register Here</div>

                            <Button type='submit' variant='default' onClick={() => { signIn("google"); }} className="w-full flex flex-row gap-2 mb-6">
                                <FaGoogle className="text-lg" />
                                Register with Google
                            </Button>

                            <div>Already have an account? <span className='cursor-pointer font-semibold transition-all hover:underline' onClick={() => setIsLogin(!isLogin)}>Login</span> here;</div>
                        </div>
                    )}
                </div>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/connect/connect.jpg'} alt='connect' width={550} height={550} priority={true} className='border-8 border-white shadow-md w-full h-96 object-cover rounded-md' />
                </div>
            </div>

        </div>
    )
}

export default Login