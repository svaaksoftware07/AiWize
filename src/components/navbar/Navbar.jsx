import React from 'react'
import "./style.css"
import { Link, useLocation } from 'react-router-dom'
import { MdMenu } from "react-icons/md";

// navbar menu data 
const data = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products", arrow: true },
    { path: "/about", name: "About Us" },
    { path: "/blogs", name: "Blogs" },
    { path: "/contact", name: "Contact Us" }
]


function Navbar() {
    // get path name from url 
    const { pathname } = useLocation()
    return (
        <>
            <nav className="nav-main-header  pb-5 z-20 ">
                <div className="max-w-[96vw] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-28">
                        <div className="flex justify-between w-full items-end">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="lg:block h-14 w-auto" src="assets/images/navLogo.png" alt="Workflow" />
                            </div>
                            <div className="sm:ml-6 flex flex-col md:flex-row ">
                                {
                                    data.map((item, index) =>
                                        <>
                                            <Link to={item.path} key={index} className={`text-gray-300 hover:text-white mx-3 px-3 py-2 rounded-md text-lg font-medium relative ${pathname === item.path ? "active" : null}`} >{item.name}{item?.arrow && <span><img src="assets/gif/home/downArrow.gif" alt="" className='absolute top-2 left-0' /></span>}</Link>
                                        </>
                                    )
                                }
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center nav-request-button">
                                <span>Request A Free Demo</span>
                            </div>
                        </div>
                        <div>
                            <MdMenu/>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar