import React, { useEffect } from 'react'
import Aos from "aos";
function About() {

    useEffect(() => {
        Aos.init({
            disable: 'mobile',
            duration: 2000
        })
    }, [])

    return (
        <>
            {/* About */}
            <div data-aos="zoom-out" className="flex justify-center text-center bg-[url(/gif/home/aboutGif.gif)] bg-cover md:h-[900px] xl:h-screen ">
                <div className="py-16 text-center w-screen bg-[#36373385] flex items-center">
                    <div>
                        <h1 className='heading_1 text-white '>At <span className='text-[var(--yellow)]'>Aiwize Labs</span></h1>
                        <h1 className='heading_1 text-white'>We follow <span className='border-solid border-b-4 border-[var(--yellow)] pb-2' style={{borderRadius:"0 0 50% 50% / 0 0 20px 20px"}}>Customer First</span> Policy</h1>
                        <div className="flex justify-center my-5">
                            <p className='text-center px-3 text-[14px] md:w-3/5 md:text-[1.2rem] text-white md:leading-8 mb-3'>
                                We do everything around the customer, its efficiency and convenience. The theme of all our products emanates from the question -
                                “What's in it for my customer?”
                                It's our endeavour to empower each and every user in the business organization,
                                starting from Business User right till the IT Users.
                                For example when a non technical Business Head or Credit Manager is able to write a Business Rule with the same ease as an IT User our objective is met. Similarly, when a Business User is able to make a change in a Loan Journey by simply dragging and dropping some components, our object is met
                                All our efforts are to take all technical complexities behind the scenes, so that users have to deal only with English like configurations</p>
                        </div>
                        <div className="flex justify-center mb-3">
                            <button className='w-[250px] h-10 bg-[var(--yellow)] button'>About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About