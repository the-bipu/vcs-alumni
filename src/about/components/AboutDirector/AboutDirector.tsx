import Image from 'next/image'
import React from 'react'

const AboutDirector = () => {
    return (
        <div className='flex flex-col gap-8 w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col-reverse items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>Director's Message</h2>
                    <p className='text-base text-justify text-black'>
                        At <strong>Vaishali Central School,</strong> we believe that education is not just about academic excellence but about nurturing responsible, compassionate, and innovative individuals.
                        Our goal is to empower young minds with the skills and values necessary to navigate the challenges of the future.
                    </p>
                    <p className='text-base text-justify text-black mt-4'>
                        We emphasize a holistic approach to learning, fostering creativity, critical thinking, and a spirit of curiosity.
                        With dedicated faculty, state-of-the-art facilities, and a nurturing environment, we are committed to shaping tomorrow’s leaders.
                        Let’s work together to build a brighter future for our children!"
                    </p>
                </div>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/about/director.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover shadow-md rounded-md' />
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

export default AboutDirector