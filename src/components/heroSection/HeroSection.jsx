import React from 'react'

function HeroSection() {
    return (
        <div className='bg-[url(assets/images/BannerHero.png)] bg-cover w-screen h-[500px] absolute top-0 left-0 z-[-1]'>
            <div className='grid place-content-center h-full'>
                <div className="max-w-8xl flex justify-between w-screen">
                    <div className=" p-10">
                        <div>
                            <p className='py-2 px-3 bg-[#262626] inline-flex rounded-2xl'>We Make AI Work Hard</p>
                        </div>
                        <div>Solve Your Problem with State-of-the-art solutions with AIWIZE LABS PVT LTD</div>
                        <div><span>Explore Now</span></div>
                    </div>
                    <div className="p-10">Karan</div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection