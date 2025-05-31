import React from 'react';

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
        <div className='w-full h-auto flex flex-col items-start justify-start'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Account Details</h2>
                </div>

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