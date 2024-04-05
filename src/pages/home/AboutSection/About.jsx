import React from 'react'

function About() {
    return (
        <>
            {/* About */}
            <div className="flex justify-center text-center bg-[url(assets/gif/home/aboutGif.gif)] bg-cover h-screen ">
                <div className="py-16 text-center w-screen bg-[#0000009b] flex items-center">
                    <div>
                        <h1 className='heading_1 text-white '>At <span className='text-[var(--yellow)]'>Aiwize Labs</span></h1>
                        <h1 className='heading_1 text-white'>We follow <span className='border-solid border-b-2 border-[var(--yellow)] rounded-bl'>Customer First</span> Policy</h1>
                        <div className="flex justify-center my-5">
                            <p className='text-center w-3/5 text-[1.3rem] text-white leading-8 mb-3'>
                                We do everything around the customer, its efficiency and convenience. The theme of all our products emanates from the question -
                                “What's in it for my customer?”
                                It's our endeavour to empower each and every user in the business organization,
                                starting from Business User right till the IT Users.
                                For example when a non technical Business Head or Credit Manager is able to write a Business Rule with the same ease as an IT User our objective is met. Similarly, when a Business User is able to make a change in a Loan Journey by simply dragging and dropping some components, our object is met
                                All our efforts are to take all technical complexities behind the scenes, so that users have to deal only with English like configurations</p>
                        </div>
                        <div className="flex justify-center">
                            <button className='w-[250px] h-10 bg-[var(--yellow)] button'>About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About