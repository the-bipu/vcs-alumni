import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto py-10 flex items-center justify-center bg-[#fff]'>
      <div className='md:w-10/12 w-11/12 h-auto flex flex-row justify-between items-center relative'>

        <Link href='/' className='cursor-pointer'>
          <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={200} height={80} className='md:w-28 w-20' />
        </Link>

      </div>
    </div>
  )
}

export default Footer