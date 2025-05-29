import React from 'react'

const FeedbackCmp = () => {
    return (
        <div className='w-full h-auto flex flex-col items-start justify-start bg-white shadowBorder rounded p-4'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Feedback for Us</h2>
                </div>

                <div>
                    We value your feedback! Please share your thoughts about the VCS Alumni Association, including any suggestions for improvement or features you would like to see. Your input helps us enhance our services and better serve our alumni community.
                </div>
            </div>
        </div>
    )
}

export default FeedbackCmp