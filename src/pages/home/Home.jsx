import "./style.css"
import { Helmet } from 'react-helmet'
import HomeHero from '../../components/heroSection/HomeHero'
import OurProducts from './ourProducts/OurProducts'
import Blog from './Blogs/Blog'
import ProductVideo from './ProductVideo/ProductVideo'
import About from './AboutSection/About'
import FreeDemo from './freeDemo/FreeDemo'
import JoinNow from '../../components/joinNow/JoinNow'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { messageAlert } from "../../utility/message"
import ReactGA from 'react-ga';
function Home() {

    // this value received from backend  
    const { thisIsEmailConfirmation } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // for showing the message 
        if (thisIsEmailConfirmation) {
            messageAlert(thisIsEmailConfirmation)
            navigate("/")
        }
        
        // Add the google analaytics service
        ReactGA.initialize('G-HNQ1Z77L46'); // Your GA tracking ID
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <>
            <Helmet>
                <title>Home - AIWIZE LABS</title>
            </Helmet>
            <div className="home-main m-0 p-0 overflow-x-hidden" >
                <HomeHero />
                <OurProducts />
                <FreeDemo />
                <About />
                <Blog />
                <ProductVideo />
            </div>
            <JoinNow />
        </>
    )
}

export default Home