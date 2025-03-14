import Image from 'next/image'
import React from 'react'

const HeaderHome = () => {
    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <Image src={'/bg/school-building.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover' />
        </div>
    )
}

export default HeaderHome