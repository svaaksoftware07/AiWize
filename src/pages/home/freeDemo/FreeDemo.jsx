import React from 'react'
import { Link } from 'react-router-dom'

function FreeDemo() {
    return (
        <>
            {/* Try our free demos  */}
            <div className="flex flex-row px-16 h-screen items-center bg-[#fffbe5]">
                <div className='flex p-12 flex-row w-[100%] items-center rounded-xl bg-[url(assets/images/home/tryWomen1.png)] bg-cover'>
                    <div className=" p-8 sm:w-[100%]">
                        <div className='mb-5'>
                            <h1 className='heading_1 mb-5'>Try our free Demos</h1>
                            <p className='text-lg mb-5 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis voluptas dignissimos omnis perferendis sequi quis, cum nulla debitis inventore?</p>
                        </div>

                        <div className="flex justify-start mt-5">
                            <Link className='w-[200px]  bg-[var(--yellow)] button'
                                to={"#"}>Ask For Free Demo</Link>

                            <Link className='w-[200px] button border-[2px] mx-3'
                                to={"#"}>Explore All Products</Link>
                        </div>
                    </div>
                    {/* <div className="w-[40%] p-5 sm:w-[100%]">
                        <img src="assets/images/home/BG _DemoSection.png" className='w-[100%] h-[100%] object-contain' alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default FreeDemo