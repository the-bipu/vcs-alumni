import React from 'react'

const RequestService = () => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-start'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Request Service</h2>
                </div>

                <div>
                    Request a service from the VCS Alumni Association. Please provide details about the service you need, and we will get back to you as soon as possible.
                </div>
            </div>
        </div>
    )
}

export default RequestService