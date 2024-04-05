import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
import HeroSection from './heroSection/HeroSection'
import { Link } from 'react-router-dom'
import OurProducts from './ourProducts/OurProducts'
import Blog from './Blogs/Blog'
import ProductVideo from './ProductVideo/ProductVideo'
import About from './AboutSection/About'
import FreeDemo from './freeDemo/FreeDemo'
import JoinNow from '../../components/joinNow/JoinNow'
function Home() {
    return (
        <>
            <Helmet>
                <title>Home - AIWIZE LABS</title>
            </Helmet>
            <div className="home-main m-0 p-0 overflow-x-hidden" >

                <HeroSection />
                <OurProducts />
                <FreeDemo />
                <About />
                <Blog />
                <ProductVideo />
                
            </div>
            <JoinNow/>
        </>
    )
}

export default Home