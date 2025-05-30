import React from 'react'

const MembershipCmp = () => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-start bg-white p-4'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Update Password</h2>
                </div>

                <div>
                    Update your password to ensure the security of your account. Please choose a strong password that you haven't used before.
                </div>
            </div>
        </div>
    )
}

export default MembershipCmp