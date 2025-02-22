import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

import { FaGithub, FaLinkedinIn, FaDribbble, FaTwitter, FaBehance, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  return (
    <div className='w-full bg-[#151515]'>

      <div className="w-full h-auto text-[#fff] md:px-[8rem] px-8 pb-8">

        <div className='flex flex-col py-4'>

          <div className='flex md:flex-row flex-col justify-between md:items-center items-start md:mb-0 mb-4'>
            <div className='flex flex-col items-start justify-between py-12'>
              <div className='text-xl font-normal w-full'>Alumni Association</div>
              <div className='md:text-3xl text-2xl font-semibold w-full'>Vaishali Central School</div>
              <div className='text-base font-light'>
                Mahnar Road, Rajason<br />
                Vaishali, Bihar - 844102<br />
                info@vaishalicentralschool.com <br />
              </div>
            </div>
            <div className='md:w-96 w-full flex flex-col gap-2'>
              <div className=' font-light text-sm uppercase'>Join the force today by clicking here.</div>
              <button className='w-full h-12 transition-all border bg-transparent hover:border-[#1967d2] hover:bg-[#1967d2] flex items-center justify-start pl-8' onClick={() => router.push('/')}>
                Contact Us!
              </button>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col items-start justify-between flex-wrap md:py-0 py-6 md:gap-4 gap-8 mb-8'>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-sm text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Navigation</p>
              <Link href='/' className='font-normal w-52'>Home</Link>
              <Link href='/about' className='font-normal w-52'>About Us</Link>
              <Link href='/alumni' className='font-normal w-52'>Our Alumni</Link>
              <Link href='/gallery' className='font-normal w-52'>Gallery</Link>
              <Link href='/guidance' className='font-normal w-52'>Career Guidance</Link>
              <Link href='/contact' className='font-normal w-52'>Contact Us</Link>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-sm text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Useful Links</p>
              <Link href='/auth/login' className='font-normal w-52'>Login & Register</Link>
              <Link href='/gallery' className='font-normal w-52'>Activities</Link>
              <Link href='/about' className='font-normal w-52'>About Association</Link>
              <Link href='/events' className='font-normal w-52'>Events & Updates</Link>
              <Link href='/terms' className='font-normal w-52'>Terms & Conditions</Link>
              <Link href='/privacy' className='font-normal w-52'>Privacy Policy</Link>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-sm text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Facilities</p>
              <Link href='/facility/classrooms' className='font-normal w-52'>Classrooms</Link>
              <Link href='/facility/library' className='font-normal w-52'>Library</Link>
              <Link href='/facility/computer-labs' className='font-normal w-52'>Computer Lab</Link>
              <Link href='/facility/playground' className='font-normal w-52'>Playground</Link>
              <Link href='/facility/laboratory' className='font-normal w-52'>Laboratory</Link>
              <Link href='/facility/seminar-room' className='font-normal w-52'>Seminar Room</Link>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center w-auto text-sm text-[#77838F]'>
              <p className='mb-2 text-[#fff] text-base font-semibold'>Other Links</p>
              <Link href='/testimonial' className='font-normal w-52'>Testimonial</Link>
              <Link href='/faqs' className='font-normal w-52'>Faqs</Link>
              <Link href='/queries' className='font-normal w-52'>General Queries</Link>
              <Link href='/' className='font-normal w-52'>Admission</Link>
              <Link href='/' className='font-normal w-52'>Webpage</Link>
              <Link href='/developers' className='font-normal w-52'>Website Team</Link>
            </div>

            <div className='w-auto flex flex-col gap-3'>
              <div className='flex flex-row items-center gap-1 text-[22px]'>

                <Link href='/' className='cursor-pointer bg-white p-4 rounded'>
                  <Image src='/logo/vcs-logo.svg' alt='logo vaishali central school' width={200} height={80} className='md:w-28 w-20' />
                </Link>

              </div>
              <div className='text-[#77838F]'>
                <div className='text-lg font-light mb-4'>
                  Call us <br />
                  <span className='text-[#1967d2] text-2xl font-bold'>+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className='bg-[#77838F]' />

      </div>

      <div className='w-full h-auto flex lg:flex-row flex-col bg-[#151515] md:px-32 px-2 pb-8'>
        <div className='flex flex-row items-center md:justify-start justify-center w-full text-sm text-[#77838F]'>
          © 2025 Vaishali Central School. All Right Reserved.
        </div>

        <div className='flex flex-row items-center justify-center gap-2 mt-2 text-sm text-[#77838F]'>
          <FaFacebook />
          <FaLinkedinIn />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer