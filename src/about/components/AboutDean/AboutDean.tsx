import React from 'react';
import Image from 'next/image';

const AboutDean = () => {
    return (
        <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/about/vice-principal.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-105 object-cover shadow-md rounded-md' />
                </div>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Dean's Message</h2>
                    <p className='text-base text-black text-justify'>
                        At Vaishali Central School, we strive to create an environment where students can flourish academically, socially, and personally. Education is not just about acquiring knowledge; it is about developing character, resilience, and a lifelong love for learning.

                        <br /><br />

                        Our commitment is to nurture young minds with strong values, discipline, and innovation, ensuring they grow into responsible and compassionate global citizens. With the support of our dedicated faculty and a vibrant learning atmosphere, we encourage students to dream big, work hard, and achieve excellence in all aspects of life.

                        <br /><br />

                        Together, let’s continue fostering a culture of success, respect, and continuous growth.
                    </p>
                </div>
            </div>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center text-base text-black text-justify'>
                Beyond the classroom, we encourage students to engage in various extracurricular activities such as sports, arts, music, and community service.
                These experiences help them develop leadership qualities, teamwork, and a sense of social responsibility.
                We believe that learning extends beyond textbooks, and real-world exposure plays a crucial role in shaping a child’s future.

                <br /><br />

                Our school fosters an inclusive and supportive learning environment where every child is valued and given the opportunity to excel.
                We aim to instill a sense of discipline, resilience, and integrity, ensuring that our students grow into responsible global citizens.
                By integrating modern teaching methodologies with traditional values, we strive to create an education system that prepares students for both academic success and personal growth.

                <br /><br />

                At Vaishali Central School, we are more than just an institution—we are a family.
                Together, with the support of parents, teachers, and the community, we are dedicated to building a strong foundation for our students' future.
                Let’s work hand in hand to inspire, educate, and empower the next generation to achieve greatness!
            </div>
        </div>
    )
}

export default AboutDean