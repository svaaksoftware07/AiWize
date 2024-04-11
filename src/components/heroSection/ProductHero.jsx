/* eslint-disable react/prop-types */
import React from 'react'

function ProductHero({data}) {
  return (
    
<div className="hero-section-main text-white overflow-x-hidden" >
    <div className={`bg-[url(/images/product/pruductHeroBg.jpeg)] bg-cover bg-no-repeat   w-screen h-auto md:h-auto sm:h-screen xl:h-screen z-[-1]`}>
        <div className='hero-section-group-one'>
            <div className='hero-section-tagline mt-5'>
                <p className='bg-[#262626]'><img src='/images/successIcon.png' alt='' className='mx-2' /><i className='pr-3'>{data.tagline}</i></p>
            </div>

            <div className="hero-section-group-two">
                <div className="hero-section-group-two-inner-one mb-8">
                    <div className='hero-section-group-two-inner-one-text'>
                        <p >{data.leftText}</p>
                    </div>
                    <div className='hero-section-group-two-inner-one-button'><span className=' w-[100px] md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black'>{data.button}</span></div>
                </div>

                <div className='w-24 md:w-[4%] '>
                    <img src="assets/gif/home/arrowGIF.gif" className='h-14 md:rotate-90' alt="" />
                </div>

                <div className="md:p-10 w-screen md:w-[48%] flex items-center justify-center">
                    <div className="my-8 md:mt-10">
                        <div className=''>
                            {/* <img src="assets/images/RADM.png" alt="" /> */}

                            <h1 className='hero-section-heading'>{data.name}<span className='text-[40px] md:text-[64px] absolute top-[-10px] md:top-[-50px] mx-2'>{data?.span}</span></h1>
                        </div>
                        <div className='hero-section-text'>
                            <p>{data.rightText}</p>
                        </div>
                    </div>
                </div>

                <div className='hero-section-group-two-inner-two-button mb-3 m-0'><span className=' m-0 w-fit px-4 md:w-[200px] bg-[var(--yellow)] button md:h-12  text-black'>Explore Now</span></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductHero