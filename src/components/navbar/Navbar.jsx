import "./style.css";
import { Link, useLocation } from 'react-router-dom';
import Contact from '../../pages/contact/Contact';
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import ProductPopUp from "../../pages/products/productPopUp/ProductPopUp";

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

    const handleContactClick = () => {
        setShowPopup(true);
    };
    const handleProductClick = () => {
        setShowPopup1(true);
    };

    // nav toggler function 
    const navClickHandler = () => {
        const element = document.getElementById("nav-item")
        element.style.display = element.style.display === "none" ? "flex" : "none"
    }
    return (
        <>
            <nav className="nav-main-header pb-5 z-20">
                <div className="max-w-[96vw] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 md:h-28">
                        <div className="nav-menu">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to={"/"}><img className="lg:block h-12 md:h-14 w-auto logo" src="assets/images/navLogo.png" alt="Workflow" /></Link>
                            </div>
                            <div className="nav-item" id='nav-item'>
                                {data.map((item, index) => (
                                    <>
                                        {item.name === "Contact Us" ? (
                                            <button onClick={handleContactClick} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-lg font-medium relative ${pathname === item.path ? "active" : null}`}>{item.name}</button>
                                        ) : item.name === "Products" ? (
                                            <button onClick={handleProductClick} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-lg font-medium relative ${pathname === item.path ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</button>
                                        ) :
                                         (
                                            <Link to={item.path} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-lg font-medium relative ${pathname === item.path ? "active" : null}`}>{item.name}{item?.arrow && <span className="hidden md:block"><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</Link>
                                        )}
                                    </>
                                ))}
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center nav-request-button">
                                <span>Request A Free Demo</span>
                            </div>
                        </div>
                        <div className='block md:hidden bg-[var(--yellow)] py-1 px-3 rounded-full'>
                            <BiMenuAltRight className='text-2xl text-black ' onClick={navClickHandler} />
                        </div>
                    </div>
                </div >
            </nav >
            {showPopup && <Contact setShowPopup={setShowPopup} />}
            {showPopup1 && <ProductPopUp setShowPopup1={setShowPopup1} />}
        </>
    );
}

export default Navbar;
