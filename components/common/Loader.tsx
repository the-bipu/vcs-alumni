import React, { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-[#212121] flex items-center justify-center'>
            <div className="loader"></div>
        </div>
    )
}

export default Loader