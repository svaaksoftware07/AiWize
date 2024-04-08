import React from 'react'

function JoinNow() {
    return (
        <>
            <div className="md:h-[450px] bg-[#191919] py-16 ">
                <div className="flex justify-center items-center h-[100%] px-16 md:px-2">
                    <div>
                        <div className='mb-5 text-white'>
                            <h1 className='text-[24px] text-center md:text-start md:text-[3rem] font-semibold rounded-full'>Ready to get started?</h1>
                            <p className='text-center text-[14px] md:text-2xl'>To join the <span className='text-[var(--yellow)]'>Aiwize</span> community</p>
                        </div>
                        <div className='flex justify-between items-center bg-white rounded-full p-1'>
                            <input className='md:p-3 px-2  md:px-4 border-none outline-none text-[12px] md:w-[250px] rounded-full' type="text" placeholder='Enter Your Email' />
                            <span className='w-[5rem] py-2 bg-[var(--yellow)] rounded-full mx-1 cursor-pointer text-center'>Join Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinNow