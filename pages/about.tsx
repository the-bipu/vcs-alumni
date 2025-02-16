import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return (
        <div className='min-h-screen bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>About Vaishali Central School | Excellence in Education</title>
                <meta name="description" content="Learn more about Vaishali Central School's mission, vision, and commitment to academic excellence and holistic development. Discover our journey and values." />
                <meta name="keywords" content="About Vaishali Central School, school history, mission, vision, education in Bihar, CBSE school, holistic learning" />
                <meta name="author" content="vaishalicentralschool.com" />

                <meta property="og:title" content="About Vaishali Central School | Excellence in Education" />
                <meta property="og:description" content="Explore the legacy of Vaishali Central School, our vision for the future, and how we shape young minds through quality education and innovative learning methods." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://www.vaishalicentralschool.com/about" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Vaishali Central School | Excellence in Education" />
                <meta name="twitter:description" content="Discover Vaishali Central School's commitment to providing quality education, fostering innovation, and preparing students for a bright future." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                            <div className='w-1/2 h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-96 object-cover' />
                            </div>
                            <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>VCS Alumni Association</h2>
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

                    <div className='flex flex-col gap-8 w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>
                            <div className='md:w-1/2 w-full h-auto flex flex-col items-start justify-center'>
                                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Director's Message</h2>
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
                            <div className='w-1/2 h-auto flex items-center justify-center'>
                                <Image src={'/bg/alumni.jpg'} alt='sphere' width={550} height={550} priority={true} className='w-full h-80 object-cover' />
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

                </div>

            </div>

        </div>
    );
}
