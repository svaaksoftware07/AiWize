import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";
import RequestPage from '../../../components/RequestPage/RequestPage';

function FreeDemo() {
    
    const [showPopup2, setShowPopup2] = useState(false);
    useEffect(() => {
        Aos.init({
            disable: 'mobile',
            duration: 2000
        })
    }, [])
    return (
        <>
            {showPopup2 && <RequestPage setShowPopup2={setShowPopup2} />}
            {/* Try our free demos  */}
            <div className="flex justify-center items-end px-3 pt-10 flex-col md:px-16 md:h-[700px] xl:h-screen bg-[#fffbe5]">
                <div
                    data-aos="zoom-in-down"
                    className='md:flex md:p-12 md:pb-0 flex-row w-[100%] items-end rounded-xl  bg-cover md:bg-[#f5f5f5]'>
                    <div className=" md:p-8 md:w-[55%]">
                        <div className='mb-5'>
                            <h1 className='heading_1 text-center md:text-start mb-5'>Try our free Demos</h1>

                            <div className="w-screen md:p-5 md:hidden">
                                <img src="/images/home/tryWomen.png" className='w-[100%] h-[100%] object-contain' alt="" />
                            </div>
                            <p className='text-center pt-3 md:text-start text-base mb-5 md:w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officiis voluptas dignissimos omnis perferendis sequi quis, cum nulla debitis inventore?</p>
                        </div>

                        <div className="flex flex-col justify-center items-center mb-3 w-100 md:flex-row md:justify-start mt-5">
                            <p onClick={()=>setShowPopup2(true)} className='w-[200px] md:w-[200px]  bg-[var(--yellow)] button mb-3'
                            >Ask For Free Demo</p>

                            <a className='w-[200px] button border-[2px] border-black md:mx-3 mb-3'
                                href={"our-product"}>Explore All Products</a>
                        </div>
                    </div>
                    <div className=" hidden md:block w-screen md:p-5 md:pb-0 md:w-[45%]">
                        <img src="/images/home/tryWomen.png" className='w-[100%] h-[100%] object-cover' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeDemo