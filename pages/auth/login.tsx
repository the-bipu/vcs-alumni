import Loader from '@/components/common/Loader';
import Login from '@/components/common/Login'
import { UserContext } from '@/context/userContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'

const LoginPage = () => {
    const { setActiveTab, loading, authenticated } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        setActiveTab('login');

        if (authenticated) {
            router.push('/account');
        }
    }, [setActiveTab, authenticated]);

    return (
        <>
            {loading && <Loader />}
            <Login />
        </>
    )
}

export default LoginPage