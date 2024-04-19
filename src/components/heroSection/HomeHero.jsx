import React, { useEffect, useState } from 'react'
import "./style.css"
import { scrolled } from '../../utility/GlobalFunction'

// data for the causel on home 
const data = [
    {
        heading: "CHANAKYA",
        description1: "The Generative AI Based",
        description2: "Business Rule Engine"
    },
    {
        heading: "NatFlow",
        description1: "Intuitive enterprise",
        description2: "Journey Builder"
    },
    {
        heading: "PayYes",
        description1: "Enterprise Collections",
        description2: "Suite"
    },
    {
        heading: "RADM",
        span1: "X",
        description1: "Rapid Application",
        description2: "Development Maximized",
    },
]
function HomeHero() {
    const [count, setCount] = useState(1500)
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
        <div className="hero-section-main text-white overflow-hidden bg-[url(/gif/home/heroSection.gif)] bg-cover bg-no-repeat" >
            <div className="hero-background-color">
                <div className='hero-section-group'>
                    <div className='hero-sectio-one'>

                        <div className='hero-section-tagline'>
                            <p className='bg-[#262626]'><img src='/images/successIcon.png' alt='' className='mx-2' /><i className='pr-3'>We Make AI Work Hard</i></p>
                        </div>

                        <div className="hero-section-content">
                            <div className='hero-section-inner-one-text'>
                                <p >Solve Your Problem with State-of-the-art</p>
                                <p >solutions with <span className='text-[var(--yellow)]'>AIWIZE LABS PVT LTD</span></p>
                            </div>
                            <div className='hero-middle-arrow'>
                                <img src="/gif/home/arrowGIF.gif" className='h-14 md:rotate-90' alt="" />
                            </div>

                            <div className="hero-section-inner-two-text">
                                <div className="hero-floating">
                                    <div className='hero-floating-heading'>
                                        {/* <img src="/images/RADM.png" alt="" /> */}
                                        <h1 className='hero-section-heading'>{data[index].heading}<span className='mx-2'>{data[index]?.span1}</span></h1>
                                    </div>
                                    <div className='hero-floating-text'>
                                        <p>{data[index].description1}</p>
                                        <p >{data[index].description2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='hero-section-one-button'>
                            <span onClick={scrolled}>Explore Now</span>
                        </div>
                    </div>
                    {/* <div className='hero-section-group-two-inner-two-button mb-5'><span className=' w-fit px-4 md:w-[350px] bg-[var(--yellow)] button md:h-12  text-black' onClick={scrolled}>Explore Now</span></div> */}
                </div>
            </div>
        </div>

    )
}

export default HomeHero