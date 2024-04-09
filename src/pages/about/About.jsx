import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
function About() {
  return (
    <>
      <Helmet>
        <title>About - AIWIZE LABS</title>
      </Helmet>
      <div className="hero-section-main text-white overflow-x-hidden" >
        <div className={`bg-[url(assets/images/about/BannerHeroVideo.png)] bg-cover bg-no-repeat   w-screen h-scree md:h-auto sm:h-screen xl:h-[90vh] z-[-1]`}>
            <div className='hero-section-group-one'>
                <div className="">
                <p className='text-3xl text-center'>Our Story</p>
                <h3 className='hero-section-heading text-center'>ABOUT US</h3>
                </div>
            </div>
        </div>
    </div>

    <div className="h-screen">
            <div className="flex flex-col xl:flex-row p-8">
                <div className='w-100 xl:w-50'>
                   <p className='text-center xl:text-start '> 
                   <span className='py-1 px-3'>OUR VISION</span>
                   </p>
                   <h3 className='text-[3rem]'>Turn Your <span className='text-[var(--yellow)]'>Ideas</span> Into <span className='text-[var(--yellow)]'>Reality</span>.</h3>
                </div>
                <div className='w-100 xl:w-50'></div>
            </div>
        </div>

    </>
  )
}

export default About