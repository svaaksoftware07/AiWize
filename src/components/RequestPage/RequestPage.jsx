/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { IoReturnUpBack } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { useState } from "react";
import { toast } from 'react-toastify';

function RequestPage({ setShowPopup2 }) {

  const handleGoBack = () => {
    setShowPopup2(false);
  };

  const [emailData, setEmailData] = useState({
    from_name: '',
    to_name: 'AiWize',
    organization_name: "",
    mobile_no: "",
    email_id: "",
    country_code: "",
    product_name:"",
    message:""
  });

  // send email 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("emailData", emailData);
    emailjs.send('service_b099v8g', 'template_7crzld8', emailData, '-8fIFV9ixVaXypDE5')
      .then((response) => {
        toast.success('Email sent successfully!');
        handleGoBack()
      }, (error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
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
              <IoReturnUpBack onClick={handleGoBack} className="bg-black text-[var(--yellow)] rounded-full text-4xl p-2 font-bold md:mx-[12rem] cursor-pointer" />
              <h3 className="text-center font-semibold text-xl lg:text-2xl py-2">Request A Free Demo</h3>
              <p className="text-center text-base lg:text-lg pb-3 lg:pb-6 text-[#667085]">
                We’d love to hear from you. Please fill out this form.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 md:w-96 lg:w-1/2 mx-auto">
                <input
                  type="text"
                  placeholder="First Name"
                  name="from_name"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email_id"
                  placeholder="you@company.com"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                  onChange={handleChange}
                />
                <div className="bg-black rounded ">
                  <select onChange={handleChange} name="country_code" id="" className="text-xs h-8 placeholder-[var(--yellow)] text-[var(--yellow)]">
                    <option value="USA">US</option>
                    <option value="IND">IND</option>
                    <option value="CHN">CHN</option>
                    <option value="FRA">FRA</option>
                    <option value="RUS">RUS</option>
                    <option value="SAU">SAU</option>
                  </select>

                  <input
                    type="tel"
                    name="mobile_no"
                    placeholder="+91 1234567890"
                    onChange={handleChange}
                    className="w-[70%] outline-none text-xs h-8 placeholder-[var(--yellow)]"
                  />

                </div>
                <input 
                type="text" 
                name="organization_name"
                onChange={handleChange}
                placeholder="Name of the Organisation" 
                className="text-xs h-8 placeholder-[var(--yellow)]" 
                />
                <label name="product_name" htmlFor="product" className="text-sm leading-[1px]">Choose a Product</label>
                <select onChange={handleChange} name="" id="product" className="text-xs h-8 placeholder-[var(--yellow)] text-[var(--yellow)]">
                  <option value="CHANAKYA">CHANAKYA</option>
                  <option value="NatFlow">NatFlow</option>
                  <option value="PayYes">PayYes</option>
                  <option value="RADM">RADM</option>
                </select>

                <label htmlFor="textarea" className="text-sm leading-[1px]">Tentative Use Case/Comments</label>
                <textarea 
                name="message"
                onChange={handleChange} 
                id="textarea" 
                cols="5" 
                rows="5"></textarea>
                <div className="flex gap-1">
                  <input type="checkbox" />
                  <p className="text-[12px]">You agree to our friendly Privacy Policy.</p>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestPage;
