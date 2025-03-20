import React from 'react';
import { Button } from '@/components/ui/button';

const JobsList = () => {
    return (
        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-24 pt-12 pb-24 text-black border-b border-b-[#acacac]'>

            <div className='w-full flex flex-col gap-6'>
                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Data Entry Operator</div>
                        <div className='font-normal'>MS Excel, Typing, Basic Computer Skills</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Retail Sales Associate</div>
                        <div className='font-normal'>Customer Service, Billing, Stock Management</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Delivery Executive</div>
                        <div className='font-normal'>Logistics, Navigation, Customer Handling</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Call Center Representative</div>
                        <div className='font-normal'>Communication, Customer Support, Problem-Solving</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Electrician Assistant</div>
                        <div className='font-normal'>Basic Electrical Work, Wiring, Safety Knowledge</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Field Technician</div>
                        <div className='font-normal'>Device Installation, Troubleshooting, Maintenance</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Housekeeping Staff</div>
                        <div className='font-normal'>Cleaning, Maintenance, Organization</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>

                <div className='w-full flex flex-row p-8 items-center justify-between text-center serviceCard'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-blue-600 font-normal'>Connect</div>
                        <div className='text-2xl font-semibold'>Security Guard</div>
                        <div className='font-normal'>Surveillance, Patrolling, Safety Procedures</div>
                    </div>
                    <div className='w-auto h-auto flex items-center justify-center'>
                        <Button variant={'default'}>Apply Now</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default JobsList