import React from 'react'

const Loader = () => {
    return (
        <div className='absolute top-0 left-0 bg-[#000000d5] w-full h-screen flex items-center justify-center'>
            <div className="loader">
                <div className="contain">
                    <div className="carousel">
                        <div className="love"></div>
                        <div className="love"></div>
                        <div className="love"></div>
                        <div className="love"></div>
                        <div className="love"></div>
                        <div className="love"></div>
                        <div className="love"></div>
                    </div>
                </div>
                <div className="contain">
                    <div className="carousel">
                        <div className="death"></div>
                        <div className="death"></div>
                        <div className="death"></div>
                        <div className="death"></div>
                        <div className="death"></div>
                        <div className="death"></div>
                        <div className="death"></div>
                    </div>
                </div>
                <div className="contain">
                    <div className="carousel">
                        <div className="robots"></div>
                        <div className="robots"></div>
                        <div className="robots"></div>
                        <div className="robots"></div>
                        <div className="robots"></div>
                        <div className="robots"></div>
                        <div className="robots"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader