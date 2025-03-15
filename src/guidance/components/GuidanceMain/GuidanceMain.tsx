import React from 'react';
import Image from 'next/image';

const GuidanceMain = () => {
    return (
        <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/career/career.jpg'} alt='mentor image' width={550} height={550} priority={true} className='w-full h-96 object-cover rounded-md shadow-md' />
                </div>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h1 className='md:text-4xl text-2xl font-bold text-[#353535] mb-4'>Career Guidance from Alumni</h1>
                    <p className='text-base text-black text-justify'>
                        Navigating the journey from school to a successful career can be challenging, but with the right guidance, the path becomes much clearer. Our distinguished alumni, who have excelled in various fields, are here to mentor and support current students and fellow graduates. Their experiences serve as a roadmap to success, providing valuable insights into industry trends, skill development, and career opportunities.
                        <br /><br />

                        Learning from those who have walked the same hallways and faced similar challenges offers a unique advantage. Whether you’re aiming for higher studies, entrepreneurship, or a corporate career, the shared wisdom of our alumni can help you make informed decisions and avoid common pitfalls.
                    </p>
                </div>
            </div>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center text-base text-black text-justify'>
                From career counseling sessions to networking events, our alumni-driven initiatives ensure that every student receives the guidance needed to pursue their dreams. Workshops, webinars, and one-on-one mentoring sessions are just a few of the ways in which our alumni contribute to the professional growth of the next generation.
                <br /><br />

                We believe in the power of community and continuous learning. By staying connected with our alumni network, students and young graduates gain access to real-world experiences, internship opportunities, and valuable career advice. The mentorship and support system established by our alumni pave the way for professional success.
                <br /><br />

                Join us in building a future where knowledge and experience are shared freely, creating a stronger and more connected alumni network. Whether you seek guidance or wish to contribute your expertise, Vaishali Central School's alumni community is the perfect place to learn, grow, and inspire.
            </div>
        </div>
    )
}

export default GuidanceMain