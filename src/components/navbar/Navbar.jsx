import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
function Navbar() {
    return (
        <>
            <nav className="nav-main-header  pb-5 z-20">
                <div className="max-w-[96vw] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full items-end">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="lg:block h-12 w-auto" src="assets/images/navLogo.png" alt="Workflow" />
                            </div>
                            <div className="sm:ml-6 sm:flex">
                                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium" >Home</Link>
                                <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Products</Link>
                                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About Us</Link>
                                <Link to="/blogs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Blogs</Link>
                                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Contact Us</Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center nav-request-button">
                                <span>Request A Free Demo</span>
                            </div>
                        </div>
                {/* <div>
                    <MdMenu />
                </div> */}
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar