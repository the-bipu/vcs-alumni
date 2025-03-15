import React from 'react';
import Image from 'next/image';

const AboutAlumni = () => {
    return (
        <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                <div className='md:w-1/2 w-full h-auto flex items-center justify-center'>
                    <Image src={'/connect/about.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover rounded-md shadow-md' />
                </div>
                <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                    <h2 className='md:text-4xl text-3xl font-bold text-[#353535] mb-4'>VCS Alumni Association</h2>
                    <p className='text-base text-black text-justify'>
                        The Vaishali Central School Alumni Association is a vibrant and supportive community that fosters lifelong connections among former students, faculty, and staff.
                        Our alumni network serves as a bridge between the past and the future, allowing graduates to stay connected, share experiences, and contribute to the school's growth.

                        <br /><br />

                        Through reunions, mentorship programs, and career guidance initiatives, we ensure that our alumni remain engaged and empowered in their personal and professional journeys.
                        Whether you want to reconnect with old classmates, share your success stories, or give back to your alma mater, the VCS Alumni Association provides the perfect platform to celebrate our shared legacy.
                    </p>
                </div>
            </div>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center text-base text-black text-justify'>
                Our mission is to create a strong and meaningful network that supports not only our alumni but also current students.
                By participating in mentorship programs, alumni can inspire and guide students in choosing the right career paths, gaining industry insights, and building a professional network.
                The association also provides a platform for alumni to share job opportunities, internships, and professional development resources.

                <br /><br />

                We believe that the bond between a student and their school lasts a lifetime.
                That’s why we regularly organize networking events, interactive workshops, and community service initiatives that allow alumni to engage with the school in meaningful ways.
                These events are designed to celebrate achievements, exchange knowledge, and strengthen the VCS family.

                <br /><br />

                The VCS Alumni Association is more than just a network; it’s a community driven by shared values, traditions, and the desire to give back.
                We invite all our alumni to stay connected, get involved, and continue making a difference in the lives of future generations.
            </div>
        </div>
    )
}

export default AboutAlumni