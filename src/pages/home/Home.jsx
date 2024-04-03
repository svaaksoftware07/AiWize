import React from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
import HeroSection from '../../components/heroSection/HeroSection'
function Home() {
    return (
        <>
            <Helmet>
                <title>Home - AIWIZE LABS</title>
            </Helmet>
            <div className="grid place-content-center h-screen">
                <div className="text-center w-100 text-white text-2xl">
                    <HeroSection />
                    <h1 >Hello AIWize Labs </h1>
                    <h3>Home</h3>
                </div>
            </div>
        </>
    )
}

export default Home