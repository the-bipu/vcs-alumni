'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
  accountType: string;
  position: string;
}

const AlumniPage = () => {
  const [alumniData, setAlumniData] = useState<AlumniData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await fetch('/api/users/diamond')
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
    <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac]'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
        <div className='w-full h-auto flex flex-col items-start gap-2'>
          <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>VCS Proud Alumni</h1>
          <p className='text-base text-justify text-black'> Our alumni have made us proud with their achievements in various fields. From successful careers to impactful contributions to society, they embody the values and excellence of Vaishali Central School. Celebrate their journey and get inspired by their stories! </p>
        </div>
        <div className='w-full h-auto flex flex-row flex-wrap items-center md:justify-between justify-center gap-8'>

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
    </div>
  )
}

export default AlumniPage