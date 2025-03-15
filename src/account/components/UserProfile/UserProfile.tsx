import React, { useContext } from 'react';
import Image from 'next/image';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PenBoxIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface UserProfileProps {
    setIsEditing: (value: boolean) => void;
    isEditing: boolean;
    userData: any;
    formattedDate: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ setIsEditing, isEditing, userData, formattedDate }) => {
    return (
        <div className='w-full h-auto flex md:flex-row flex-col py-20 gap-10 items-start justify-start'>
            <div className='flex flex-col gap-4 md:min-w-96 min-w-full'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${userData?.profile}.png`}
                    alt='profile'
                    width={384}
                    height={384}
                    priority={true}
                    className='w-96 h-96 object-cover border-4 border-white shadow'
                />
                <div className='w-full md:flex hidden flex-col items-center justify-between gap-4'>
                    <div className='flex flex-col gap-2 w-full'>
                        <Label className='text-base'>Full Name</Label>
                        <Input defaultValue={userData?.fullName} disabled />
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
                        <Label className='text-base'>Phone Number</Label>
                        <Input defaultValue={userData?.phone} className='capitalize' disabled />
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full gap-4'>
                <div className='flex w-full flex-row items-center justify-between mb-2'>
                    <h2 className='md:text-4xl text-xl font-bold text-[#353535]'>Account Details</h2>
                    <PenBoxIcon onClick={() => setIsEditing(!isEditing)} className='cursor-pointer' />
                </div>
                <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Email</Label>
                        <Input defaultValue={userData?.email} disabled />
                    </div>

                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>User Type</Label>
                        <Input defaultValue={userData?.userType} className='capitalize' disabled />
                    </div>
                </div>
                <div className='w-full md:hidden flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Full Name</Label>
                        <Input defaultValue={userData?.fullName} disabled />
                    </div>

                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Phone Number</Label>
                        <Input defaultValue={userData?.phone} className='capitalize' disabled />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Gender</Label>
                        <Input defaultValue={userData?.gender} disabled />
                    </div>

                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Date of Birth</Label>
                        <Input defaultValue={formattedDate} className='capitalize' disabled />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Joining Year</Label>
                        <Input defaultValue={userData?.joiningYear} disabled />
                    </div>

                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Passing Year</Label>
                        <Input defaultValue={userData?.passingYear} className='capitalize' disabled />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Account Type</Label>
                        <Input defaultValue={userData?.accountType} disabled />
                    </div>

                    <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                        <Label className='text-base'>Position</Label>
                        <Input defaultValue={userData?.position} className='capitalize' disabled />
                    </div>
                </div>
                <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                    <div className='flex flex-col gap-2 w-full'>
                        <Label className='text-base'>Bio</Label>
                        <Textarea defaultValue={userData?.bio} className='min-h-32' disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile