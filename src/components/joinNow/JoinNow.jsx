import React from 'react'

function JoinNow() {
    return (
        <>
            <div className="h-[450px] bg-[#191919] ">
                <div className="flex justify-center items-center h-[100%]">
                    <div>
                        <div className='mb-5 text-white'>
                            <h1 className='text-[3rem] font-semibold rounded-full'>Ready to get started?</h1>
                            <p className='text-center text-2xl'>To join the <span className='text-[var(--yellow)]'>Aiwize</span> community</p>
                        </div>
                        <div className='flex justify-between items-center bg-white rounded-full'>
                            <input className='p-3  px-4 border-none outline-none w-[250px] rounded-full' type="text" placeholder='Enter Your Email' />
                            <span className='px-6 py-2 bg-[var(--yellow)] rounded-full mx-1 cursor-pointer'>Join Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinNow