import React, { useState } from 'react';
import { homeFaqs } from '@/components/assets/homeFaqs';
import { CaretUpIcon } from '@radix-ui/react-icons';

const FaqsHome = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='flex w-full h-auto items-center justify-center bg-[#eaeaea] py-20'>
            <div className='md:w-10/12 w-11/12 h-auto flex flex-col items-center justify-center gap-8'>
                <h2 className='md:text-4xl text-xl font-bold text-[#353535] mb-4'>Frequently Asked Questions</h2>
                <div className="relative flex flex-col items-center justify-center text-left pb-6">
                    {homeFaqs.slice(0, 6)?.map((item: any, index: any) => (
                        <div
                            className="md:w-9/12 w-11/12 rounded-xl py-3 md:px-6 px-4 my-3 cursor-pointer bg-white shadow"
                            key={index}
                            onClick={() => toggle(index)}
                        >
                            <div className="pb-1 flex items-center justify-between">
                                <p className="pr-4 text-[#000000] md:text-lg text-base font-medium">{item.que}</p>
                                {selected === index ? (
                                    <CaretUpIcon className='w-6 h-6 text-black transition-all duration-300 rotate-0' />
                                ) : (
                                    <CaretUpIcon className='w-6 h-6 text-black transition-all duration-300 rotate-180' />
                                )}
                            </div>
                            <div
                                className={
                                    selected === index
                                        ? "overflow-hidden transition-all md:py-4 py-3 max-h-96 ease-out duration-700 text-[#6F7680] text-base font-medium"
                                        : "overflow-hidden transition-all max-h-0 duration-300 text-[#6F7680]"
                                }
                            >
                                <p>{item.ans}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqsHome