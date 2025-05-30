import React from 'react'

const MembershipCmp = () => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-start bg-white shadowBorder rounded p-4'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Your Membership</h2>
                </div>

                <div>
                    You're currently a member of the VCS Alumni Association. Your membership is valid.
                </div>
            </div>
        </div>
    )
}

export default MembershipCmp