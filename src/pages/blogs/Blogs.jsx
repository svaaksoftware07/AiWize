import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'

function Blogs() {
    return (
       <>
       <Helmet>
        <title>Blogs - AIWIZE LABS</title>
      </Helmet>
         <div className="hero-section-main text-white overflow-x-hidden" >
            <div className={`bg-[url(/images/blog/BannerHeroVideo.png)] bg-cover bg-center bg-no-repeat   w-screen h-[90vh] sm:h-screen xl:h-[70vh] z-[-1]`}>
                <div className='hero-section-group-one'>
                    <div className="">
                        <p className='text-3xl text-center'>Let’s Check</p>
                        <h3 className='hero-section-heading text-center'> WHAT’S NEW</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>ritesh</div>
       </>
    )
}

export default Blogs