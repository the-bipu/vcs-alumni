import React from 'react';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <Image
                        src="/logo/logo.svg"
                        alt="Company logo"
                        width={280}
                        height={38}
                        priority
                    />
                    <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                        <li>Currently we're under development.</li>
                    </ul>
    
                </main>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="mailto:digitalproteinlabs@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Contact Us →
                    </a>
                </footer>
            </div>
  )
}

export default ComingSoon