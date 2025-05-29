import React from 'react';
import { Button } from '@/components/ui/button';

const JobsList = () => {
    return (
        <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-24 pt-12 pb-24 text-black'>

            <div className='w-full flex flex-col gap-6'>
                {jobsData.map((job, index) => (
                    <div key={index} className='w-full flex flex-row p-8 items-center justify-between text-center border rounded-xl bg-[#eaeaea]'>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='text-blue-600 font-normal'>{job.company}</div>
                            <div className='text-2xl font-semibold mb-3'>{job.title}</div>
                            <div className='font-normal flex flex-row gap-1'>
                                {job.skills.map((skill, idx) => (
                                    <span className='bg-black text-sm text-white rounded-full px-3 py-[1px]' key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className='w-auto h-auto flex items-center justify-center'>
                            <Button variant={'default'}>Apply Now</Button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default JobsList

const jobsData = [
    {
        company: 'Connect',
        title: 'Data Entry Operator',
        skills: ['MS Excel', 'Typing', 'Basic Computer Skills'],
    },
    {
        company: 'Connect',
        title: 'Retail Sales Associate',
        skills: ['Customer Service', 'Billing', 'Stock Management'],
    },
    {
        company: 'Connect',
        title: 'Delivery Executive',
        skills: ['Logistics', 'Navigation', 'Customer Handling'],
    },
    {
        company: 'Connect',
        title: 'Call Center Representative',
        skills: ['Communication', 'Customer Support', 'Problem-Solving'],
    },
    {
        company: 'Connect',
        title: 'Electrician Assistant',
        skills: ['Basic Electrical Work', 'Wiring', 'Safety Knowledge'],
    },
    {
        company: 'Connect',
        title: 'Field Technician',
        skills: ['Device Installation', 'Troubleshooting', 'Maintenance'],
    },
    {
        company: 'Connect',
        title: 'Housekeeping Staff',
        skills: ['Cleaning', 'Maintenance', 'Organization'],
    },
    {
        company: 'Connect',
        title: 'Security Guard',
        skills: ['Surveillance', 'Patrolling', 'Safety Procedures'],
    },
];