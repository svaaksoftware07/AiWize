import "./style.css";
import { BsTwitterX } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  const sections = [
    {
      title: "Platforms",
      links: ["Platforms", "CRMNext", "CustomerNext", "dataNext", "gptNext"],
    },
    {
      title: "Products",
      links: [
        "CHANKAYA BUSINESS RULE ENGINE",
        "NATFLOW INTUITIVE ENTERPRISE",
        "JOURNEY BUILDER",
        "PAY YES ENTERPRISE COLLECTIONS SUITE",
        "RADMAX AUTONOMOUS",
        "RAPID APPLICATION DEVELOPMENT SUITE",
      ],
    },
    {
      title: "About Us",
      links: [
        "Partners",
        "Media centre",
        "Careers",
        "Privacy",
        "responsible",
        "disclosure policy",
      ],
    },
    {
      title: "Blogs",
      links: [],
    },
    {
      title: "Contact Us",
      links: [],
    },
  ];

  return (
    <div className=" bg-black text-gray-400 flex flex-col gap-0 md:gap-20 py-4 footer ">
      <div className="flex justify-around flex-wrap footer1 pt-8">
        <div>
          <img src="assets/images/navLogo.png" alt="" className="w-32 mt-[-18px]"  />
        </div>
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-3 uppercase">
            <h3 className="text-[1.3rem]">{section.title}</h3>
            {section.links.map((link, i) => (
              <p className="text-[.89rem] cursor-pointer hover:text-red" key={i}>{link}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap md:justify-start footer2">
        <span className="footer2_span md:pl-10 pr-6 mb-3">
          <h3 className="text-[1.3rem]">CONNECT WITH US </h3>
          <span className="flex gap-3 text-2xl font-bold m-4 text-white">
            <FaFacebookF  className="border p-1 rounded-full cursor-pointer text-3xl"/>
            <FaLinkedinIn className="border p-1 rounded-full cursor-pointer  text-3xl" />
            <ImYoutube className="border p-1 rounded-full cursor-pointer text-3xl" />
            <BsTwitterX className="border p-1 rounded-full cursor-pointer text-3xl" />
          </span>
        </span>
        <div className="footer-bottom-text p-[35px] border-b-2 md:border-b-0  md:border-l-2 border-[#FFDA14] ">
          <h4> Asia HQ </h4>
          <p>1108 Mahagun Maple</p>
          <p>F-26, Sector 50, Noida, UP- 201 301</p>
          <p>PH: +91 9818258199</p>
        </div>
        <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[#FFDA14]">
          <h4> USA HQ </h4>
          <p>702 Oberlin Road, Suite 200 Raleigh,</p>
          <p>NC 27605</p>
          <p>PH: +1 415 424 4644, 833-CRM-NEXT</p>
          <p>(Toll Free)</p>
        </div>
        {/* <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[#FFDA14]">
          <h4> Canada HQ </h4>
          <p>222 Bay St, Suite 3000; Toronto,</p>
          <p>Ontario, Canada, M5K 1E7</p>
        </div>
        <div className="footer-bottom-text p-[35px] md:border-l-2 md:border-[#FFDA14]">
          <h4> MEA HQ </h4>
          <p>Dubai Internet City G66,</p>
          <p>PH: +97 14 430 9318</p>
        </div> */}
      </div>
      <address className="flex justify-center text-xs pt-5 md:pt-0">
        © Copyright 2024 AIWIZE LABS PVT. LTD.
      </address>
    </div>
  );
}

export default Footer;
