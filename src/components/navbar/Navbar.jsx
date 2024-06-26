import "./style.css";
import { Link, useLocation } from 'react-router-dom';
import Contact from '../../pages/contact/Contact';
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import ProductPopUp from "../productPopUp/ProductPopUp";
import RequestPage from "../RequestPage/RequestPage";

// Navbar menu data 
const data = [
    { path: "/", name: "Home" },
    { path: "", name: "Products", arrow: true },
    { path: "/about", name: "About Us" },
    { path: "/blogs", name: "Blogs" },
    { path: "", name: "Contact Us" },
];

function Navbar() {
    
    // get path name from url 
    const { pathname } = useLocation()
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const handleContactClick = () => {
        setShowPopup(true);
    };
    const handleProductClick = () => {
        setShowPopup1(true);
    };


    // nav toggler function 
    const navClickHandler = () => {
        const element = document.getElementById("nav-item-mobile")
        element.style.display = element.style.display === "none" ? "flex" : "none"
    }

    useEffect(() => {
        const element = document.getElementById("nav-item-mobile")
        element.style.display = "none"
        if(window.innerWidth>768){
            const element = document.getElementById("nav-item-mobile")
            element.style.display = "none"
        }
    }, [pathname]);

    return (
        <>
            <nav className="nav-main-header pb-5 z-20">
                <div className="max-w-[90vw] mx-auto">
                    <div className="flex justify-between items-center h-20 md:h-28">
                        <div className="nav-menu">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to={"/"}><img className="lg:block h-12 md:h-14 w-auto logo" src="/images/navLogo.png" alt="Workflow" /></Link>
                            </div>
                            <div className="nav-item" id='nav-item'>
                                {data.map((item, index) => (
                                    <>
                                        {item.name === "Contact Us" ? (
                                            <button onClick={handleContactClick} key={index} className={`w-100 text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.path ? "active" : null}`}>{item.name}</button>
                                        ) : item.name === "Products" ? (
                                            <button onClick={handleProductClick} key={index} className={`w-100 text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.name ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</button>
                                        ) :
                                            (
                                                <Link to={item.path} key={index} className={`w-100 text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.path ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</Link>
                                            )}
                                    </>
                                ))}
                            </div>
                            {/* mobile nav bar  */}
                            <div className="nav-item " id='nav-item-mobile'>
                                {data.map((item, index) => (
                                    <>
                                        {item.name === "Contact Us" ? (
                                            <button onClick={handleContactClick} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.path ? "active" : null}`}>{item.name}</button>
                                        ) : item.name === "Products" ? (
                                            <button onClick={handleProductClick} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.name ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</button>
                                        ) :
                                            (
                                                <Link to={item.path} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-base  font-semibold relative ${pathname === item.path ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</Link>
                                            )}
                                    </>
                                ))}
                                <div className="sm:ml-6 sm:flex sm:items-center nav-request-mobile" onClick={() => { setShowPopup2(true) }}>
                                    <span>Request A Free Demo</span>
                                </div>
                            </div>

                            <div className="hidden sm:ml-6 sm:flex sm:items-center nav-request-button" onClick={() => { setShowPopup2(true) }}>
                                <span>Request A Free Demo</span>
                            </div>
                        </div>
                        <div className='menu-icon bg-[var(--yellow)] py-1 px-3 rounded-full'>
                            <BiMenuAltRight className='text-3xl text-black ' onClick={navClickHandler} />
                        </div>
                    </div>
                </div >
            </nav >
            {showPopup && <Contact setShowPopup={setShowPopup} />}
            {showPopup1 && <ProductPopUp setShowPopup1={setShowPopup1} />}
            {showPopup2 && <RequestPage setShowPopup2={setShowPopup2} />}
        </>
    );
}

export default Navbar;
