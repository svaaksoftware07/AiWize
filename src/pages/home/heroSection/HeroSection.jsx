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
        heading: "NATFLOW",
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
function HeroSection() {

    const [count, setCount] = useState(3000)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let interval;
        if (index < data.length-1) {
            interval = setInterval(() => {
                setIndex(prevIndex => prevIndex + 1);
            }, count);
        } else {
            setTimeout(()=>{
                setIndex(0)
            },count)
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [index, data.length]);

    return (
        <div className="w-100 h-screen text-white">
            <div className='bg-[url(assets/gif/home/heroSection.gif)] bg-cover  w-screen h-screen z-[-1]'>
                <div className='grid place-content-center h-full bg-[#0000009b]'>
                    <div className="max-w-8xl flex justify-between items-center w-screen">
                        <div className="p-16 w-screen md:w-[48%]">
                            <div className='flex items-start mb-16'>
                                <p className='py-1 bg-[#262626] inline-flex rounded-2xl md:px-3 md:text-xl'><img src='assets/images/successIcon.png' alt='' className='mx-2' /><i>We Make AI Work Hard</i></p>
                            </div>
                            <div className='mb-4 text-[1rem] md:text-[2rem] '>
                                <p className='leading-[40px] sm:'>Solve Your Problem with State-of-the-art</p>
                                <p className='leading-[40px]'>solutions with <span className='text-[var(--yellow)]'>AIWIZE LABS PVT LTD</span></p>
                            </div>
                            <div className='flex items-start'><span className='w-[200px] bg-[var(--yellow)] button h-12  text-black'>Explore Now</span></div>
                        </div>

                        <div className='w-[4%]'>
                            <img src="assets/gif/home/arrowGIF.gif" className='rotate-90' alt="" />
                        </div>
                        <div className="p-10 w-[48%] flex items-center justify-center">
                            <div className=" mt-10">
                                <div className=''>
                                    {/* <img src="assets/images/RADM.png" alt="" /> */}
                                    <h1 className='hero-section-heading'>{data[index].heading}<span className='text-[64px] absolute top-[-50px] mx-2'>{data[index]?.span1}</span></h1>
                                </div>
                                <div className='text-[2.5rem]'>
                                    <p className='leading-[50px]'>{data[index].description1}</p>
                                    <p className='leading-[50px] flex'>{data[index].description2}<span className='text-lg flex items-start mx-1 '>{data[index]?.span2}</span>{data[index]?.description3}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection