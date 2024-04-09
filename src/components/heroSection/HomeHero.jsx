import React, { useEffect, useState } from 'react'
import "./style.css"


// data for the causel on home 
const data = [
    {
        heading: "RADM",
        span1: "X",
        description1: "Rapid Application",
        description2: "Development Ma",
        span2: "X",
        description3: "imized"
    },
    {
        heading: "NatFLow",
        description1: "Intuitive enterprise",
        description2: "Journey Builder"
    },
    {
        heading: "CHANAKYA",
        description1: "The Generative AI Based",
        description2: "Business Rule Engine"
    },
    {
        heading: "PayYes",
        description1: "Enterprise Collections",
        description2: "Suite"
    }
]
function HomeHero() {
   

    const [count, setCount] = useState(3000)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let interval;
        if (index < data.length - 1) {
            interval = setInterval(() => {
                setIndex(prevIndex => prevIndex + 1);
            }, count);
        } else {
            setTimeout(() => {
                setIndex(0)
            }, count)
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [index, data.length]);

    return (
        <div className="hero-section-main text-white overflow-x-hidden" >
            <div className={`bg-[url(assets/gif/home/heroSection.gif)] bg-cover bg-no-repeat   w-screen h-screen md:h-[700px] xl:h-screen z-[-1]`}>
                <div className='hero-section-group-one'>
                    <div className='hero-section-tagline'>
                        <p className='bg-[#262626]'><img src='assets/images/successIcon.png' alt='' className='mx-2' /><i className='pr-3'>We Make AI Work Hard</i></p>
                    </div>

                    <div className="hero-section-group-two">
                        <div className="hero-section-group-two-inner-one mb-8">
                            <div className='hero-section-group-two-inner-one-text'>

                                <p >Solve Your Problem with State-of-the-art</p>
                                <p >solutions with <span className='text-[var(--yellow)]'>AIWIZE LABS PVT LTD</span></p>

                            </div>
                            <div className='hero-section-group-two-inner-one-button'><span className=' w-[100px] md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black'>Explore Now</span></div>
                        </div>

                        <div className='w-24 md:w-[4%] '>
                            <img src="assets/gif/home/arrowGIF.gif" className='h-14 md:rotate-90' alt="" />
                        </div>

                        <div className="md:p-10 w-screen md:w-[48%] flex items-center justify-center">
                            <div className="my-8 md:mt-10">
                                <div className=''>
                                    {/* <img src="assets/images/RADM.png" alt="" /> */}
                                    <h1 className='hero-section-heading'>{data[index].heading}<span className='text-[40px] md:text-[64px] absolute top-[-10px] md:top-[-50px] mx-2'>{data[index]?.span1}</span></h1>
                                </div>
                                <div className='hero-section-text'>
                                    <p>{data[index].description1}</p>
                                    <p >{data[index].description2}<span className='text-lg flex items-start mx-1 w-100 '>{data[index]?.span2}</span>{data[index]?.description3}</p>
                                </div>
                            </div>
                        </div>

                        <div className='hero-section-group-two-inner-two-button'><span className=' w-fit px-4 md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black'>Explore Now</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero