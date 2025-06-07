import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface AlumniData {
    email: string;
    phone: string;
    fullName: string;
    profile: string;
    gender: string;
    bio: string;
    dob: string;
    joiningYear: string;
    passingYear: string;
    userType: string;
    verified: Boolean;
    accountType: string;
    position: string;
}

const VerificationCmp = () => {
    const [alumniData, setAlumniData] = useState<AlumniData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const res = await fetch('/api/users/coal')
                if (!res.ok) throw new Error('Failed to fetch alumni')
                const data = await res.json()
                setAlumniData(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchAlumni()
    }, [])

    return (
        <div className='w-full h-auto flex flex-col items-start justify-start'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Verify Alumnus</h2>
                </div>

                <div>
                    You're currently a member of the VCS Alumni Association. Your membership is valid.
                </div>

                {loading ? (
                    <p className="text-center text-gray-600">Loading alumni...</p>
                ) : (
                    <div className='w-full h-auto flex flex-row flex-wrap items-center md:justify-between justify-center gap-8'>
                        {alumniData.map((item: any, index: number) => (
                            <div key={index} className='flex flex-col gap-4'>
                                <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${item?.profile || 'default-profile'}.png`} alt={item?.fullName || 'alumni'} width={288} height={288} priority={true} className='w-72 h-72 border-8 border-white shadow-md rounded-full object-cover'
                                />
                                <div className='flex flex-col text-center'>
                                    <div className='text-xl font-semibold cursor-pointer text-black transition-all hover:underline'>
                                        {item?.fullName}
                                    </div>
                                    <div className='text-blue-700 text-base font-medium'>{item?.position}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerificationCmp