/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { IoReturnUpBack } from "react-icons/io5";

function RequestPage({setShowPopup2}) {
  const handleGoBack = () => {
    setShowPopup2(false);
  };
  return (
    
    <>
      <Helmet>
        <title>Contact - AIWIZE LABS</title>
      </Helmet>
      <style>
        {`
          html, body {
            overflow: hidden;
          }
        `}
      </style>
      <div className="grid place-content-center">
        <div>
          <div className="contact-background">

          <div className="contactUs_modal_container lg:mt-5">
            <IoReturnUpBack onClick={handleGoBack} className="bg-[#FFDA14] rounded-full text-4xl p-2 font-bold md:mx-[12rem] cursor-pointer" />
            <h3 className="text-center font-semibold text-xl lg:text-2xl py-2">Get in touch</h3>
            <p className="text-center text-base lg:text-lg pb-3 lg:pb-6 text-[#667085]">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form action="" className="flex flex-col gap-4 px-5 md:w-96 lg:w-1/2 mx-auto">
              <input type="text" placeholder="First Name" className="text-xs h-8 placeholder-[#3d3c3c]"/>
              <input type="email" placeholder="you@company.com" className="text-xs h-8 placeholder-[#3d3c3c]" />
              <div className="bg-[#FFDA14] rounded ">
                <select name="" id="" className="text-xs h-8 placeholder-[#3d3c3c]">
                  <option value="USA">US</option>
                  <option value="IND">IND</option>
                  <option value="CHN">CHN</option>
                  <option value="FRA">FRA</option>
                  <option value="RUS">RUS</option>
                  <option value="SAU">SAU</option>
                </select>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  className="w-[70%] outline-none text-xs h-8 placeholder-[#3d3c3c]"
                />
              </div>
              <input type="text" placeholder="Name of the Organisation" className="text-xs h-8 placeholder-[#3d3c3c]" />
              <label htmlFor="product" className="text-sm leading-[1px]">Choose a Product</label>
              <select name="" id="product" className="text-xs h-8 placeholder-[#3d3c3c]">
                  <option value="CHANAKYA">CHANAKYA</option>
                  <option value="NatFlow">NatFlow</option>
                  <option value="PayYes">PayYes</option>
                  <option value="RADM">RADM</option>
                </select>
              <label htmlFor="textarea" className="text-sm leading-[1px]">Tentative Use Case/Comments</label>
                <textarea name="" id="textarea" cols="5" rows="5"></textarea>
              <div className="flex gap-1">
                <input type="checkbox"/>
                <p className="text-[12px]">You agree to our friendly Privacy Policy.</p>
              </div>
              <button type="submit" onClick={handleGoBack}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default RequestPage;
