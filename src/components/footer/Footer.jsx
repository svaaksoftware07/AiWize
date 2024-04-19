import "./style.css";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductPopUp from "../productPopUp/ProductPopUp";
import { IoIosMail } from "react-icons/io";
import { IoCall, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import Contact from "../../pages/contact/Contact";

function Footer() {
  
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const sections = [
    {
      title: {name:<span onClick={() => setShowPopup1(true)}>Products</span>,url:"#"},
      links: [
        { name: "CHANAKYA BUSINESS RULE ENGINE", url: "/product/CHANAKYA" },
        { name: "NATFLOW ", url: "/product/NatFlow" },
        { name: "PAY YES ENTERPRISE COLLECTIONS SUITE", url: "/product/PayYes" },
        { name: "RADM", span: "X", url: "/product/RADM" },
      ],
    },

    {
      title: {name:"About Us",url:"/about"},
      links: [
        { name: "Partners", url: "#" },
        { name: "Media centre", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
    {
      title: {name:"Industries",url:"#"},
      links: [
        { name: "Industry 1", url: "#" },
        { name: "Industry 2", url: "#" },
        { name: "Industry 3", url: "#" },
      ],
    },
    {
      title: {name:"Resources",url:"#"},
      links: [
        { name: "Blogs", url: "/blogs" },
        { name: "Privacy Policy", url: "#" },
        { name: "terms & conditions", url: "#" },

      ],
    },
    {
      title:{name:<span onClick={() => setShowPopup(true)}>Contact Us</span>,url:"#"},
      links: [
        {
          name: <span className=" flex gap-4  mb-3 justify-start lg:justify-center">
            <Link to="mailto:info@aiwizelabs.com"><IoMail className="text-[#3391FF] text-[28px] " />
            </Link><Link to="whatsapp://send?text=&phone=9818258199"><IoLogoWhatsapp className=" text-[28px] text-[#33FF47]" />
            </Link><Link to="tel:9818258199"><IoCall className="text-[#FFD233] text-[28px] " /></Link></span>,
          contact: true
        }
      ],
    },
  ];

  return (
    <>
      <div className=" bg-black text-gray-400 flex flex-col gap-0 md:gap-20 py-4 footer ">
        <div className="flex justify-around flex-wrap footer1 pt-8">
          <div className="mb-5">
          <Link to="/">
            <img src="/images/navLogo.png" alt="" className="w-32 mt-[-18px]" />
          </Link>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-3 uppercase">
              <h3 className="text-[1.3rem] cursor-pointer"><Link to={section.title.url}>{section.title.name}</Link></h3>
              {section.links.map((link, i) => (
                link.contact ? <p className="text-[.89rem] cursor-pointer hover:text-red" key={i}>{link?.name}<sup>{link?.span}</sup></p>
                  : <Link to={link?.url} className="text-[.89rem] cursor-pointer hover:text-red" key={i}>{link?.name}<sup>{link?.span}</sup></Link>

              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-start lg:justify-start footer2">
          <span className="footer2_span pl-4 lg:pl-10 pr-6 mb-3">
            <h3 className="text-[1.3rem]">CONNECT WITH US </h3>
            <span className="flex gap-3 text-2xl font-bold my-4 md:mx-4 text-white">
              <Link to="#"><FaLinkedinIn className="border p-1 rounded-full cursor-pointer  text-3xl" /></Link>
              <Link to="#"><FaFacebookF className="border p-1 rounded-full cursor-pointer text-3xl" /></Link>
              <Link to="#"><ImYoutube className="border p-1 rounded-full cursor-pointer text-3xl" /></Link>
              <Link to="https://twitter.com/AIWIZELABS" target="_blank"><BsTwitterX className="border p-1 rounded-full cursor-pointer text-3xl" /></Link>
              <Link to="https://www.instagram.com/aiwizelabs/?next=%2F" target="_blank"><FaInstagram  className="border p-1 rounded-full cursor-pointer text-3xl" /></Link>
            </span>
          </span>
          <div className="footer-bottom-text p-[35px] md:border-[var(--yellow)]  md:border-l-2  ">
            <h4> Asia HQ </h4>
            <p>1108 Mahagun Maple</p>
            <p>F-26, Sector 50, Noida, UP- 201 301</p>
            <p>PH: +91 9818258199</p>
          </div>
          {/* <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[var(--yellow)]">
          <h4> USA HQ </h4>
          <p>702 Oberlin Road, Suite 200 Raleigh,</p>
          <p>NC 27605</p>
          <p>PH: +1 415 424 4644, 833-CRM-NEXT</p>
          <p>(Toll Free)</p>
        </div> */}
          {/* <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[var(--yellow)]">
          <h4> Canada HQ </h4>
          <p>222 Bay St, Suite 3000; Toronto,</p>
          <p>Ontario, Canada, M5K 1E7</p>
        </div>
        <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[var(--yellow)]">
          <h4> MEA HQ </h4>
          <p>Dubai Internet City G66,</p>
          <p>PH: +97 14 430 9318</p>
        </div> */}
        </div>
        <address className="flex justify-center text-xs pt-5 md:pt-0">
          © Copyright 2024 AIWIZE LABS PVT. LTD.
        </address>
      </div>

      {showPopup1 && <ProductPopUp setShowPopup1={setShowPopup1} />}
      {showPopup && <Contact setShowPopup={setShowPopup} />}

    </>
  );
}

export default Footer;
