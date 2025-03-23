import Image from 'next/image';
import React from 'react';

const TechUsed = () => {
    return (
        <div className='flex w-full h-auto items-center justify-center py-20 border-b border-b-[#acacac] bg-[#eaeaea]'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>

                <div className='w-full h-auto flex flex-col items-start gap-2'>
                    <h1 className='md:text-4xl text-xl font-bold text-[#353535]'>Tech Used</h1>
                    <p className='text-base text-justify text-black'>
                        Explore the cutting-edge technologies powering our platform. From frontend frameworks to backend infrastructure, we utilize the latest tools to ensure performance, scalability, and a seamless user experience.
                    </p>
                </div>

                <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center pb-8'>
                    {toolsData?.map((item: any, index: any) => (
                        <div key={index} className=' md:w-1/4 w-auto h-44 px-10 flex items-center justify-center border-[1px] border-r-[#444]'>
                            <Image src={item.image} alt={item.alt} width={120} height={120} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TechUsed

const toolsData = [
    {
        alt: "React Logo",
        image: "/tech-used/Reach.svg",
    },
    {
        alt: "Next.js Logo",
        image: "/tech-used/NextJs.svg",
    },
    {
        alt: "TypeScript Logo",
        image: "/tech-used/TypeScript.svg",
    },
    {
        alt: "Tailwind CSS Logo",
        image: "/tech-used/Tailwind.svg",
    },
    {
        alt: "PostCSS Logo",
        image: "/tech-used/PostCSS.svg",
    },
    {
        alt: "MongoDB Logo",
        image: "/tech-used/MongoDB.svg",
    },
    {
        alt: "Cloudinary Logo",
        image: "/tech-used/Cloudinary.jpg",
    },
    {
        alt: "Docker Logo",
        image: "/tech-used/Docker.svg",
    },    
];