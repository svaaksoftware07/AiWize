import React from 'react'
import { Link } from 'react-router-dom'

function FreeDemo() {
    return (
        <>
            {/* Try our free demos  */}
            <div className="flex justify-center px-3 pt-10 flex-col md:px-16 md:h-screen items-center bg-[#fffbe5]">
                <div className='md:flex md:p-12 flex-row w-[100%] items-center rounded-xl  bg-cover md:bg-[#f5f5f5]'>
                    <div className=" md:p-8 md:w-[60%]">
                        <div className='mb-5'>
                            <h1 className='heading_1 text-center md:text-start mb-5'>Try our free Demos</h1>

                            <div className="w-screen md:p-5 md:hidden">
                                <img src="assets/images/home/tryWomen.png" className='w-[100%] h-[100%] object-contain' alt="" />
                            </div>
                            <p className='text-center pt-3 md:text-start text-lg mb-5 md:w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis voluptas dignissimos omnis perferendis sequi quis, cum nulla debitis inventore?</p>
                        </div>

                        <div className="flex flex-col justify-center items-center mb-3 w-100 md:flex-row md:justify-start mt-5">
                            <Link className='w-[200px] md:w-[200px]  bg-[var(--yellow)] button mb-3'
                                to={"#"}>Ask For Free Demo</Link>

                            <Link className='w-[200px] button border-[2px] border-black md:mx-3 mb-3'
                                to={"#"}>Explore All Products</Link>
                        </div>
                    </div>
                    <div className=" hidden md:block w-screen md:p-5 md:w-[40%]">
                        <img src="assets/images/home/tryWomen.png" className='w-[100%] h-[100%] object-cover' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeDemo