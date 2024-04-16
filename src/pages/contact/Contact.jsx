/* eslint-disable react/prop-types */
import "./style.css";
import { Helmet } from "react-helmet";
import { IoReturnUpBack } from "react-icons/io5";
import {  useState } from "react";

function Contact({ setShowPopup }) {
  const handleGoBack = () => {
    setShowPopup(false);
  };

  const [emailData, setEmailData] = useState({
    from_name: '',
    to_name: 'AiWize',
    organization_name: "",
    mobile_no: "",
    email_id: "",
    country_code:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGoBack()
    // window.location.href =`https://aiwizelabs.com/sendContact?name=${emailData.from_name}&mobile=${emailData.mobile_no}&email=${emailData.email_id}&organizationName=${emailData.organization_name}`
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
      <div className="grid place-content-center h-scree ">
        <div>
          <div className="contact-background">

            <div className="contactUs_modal_container">
              <IoReturnUpBack 
              onClick={handleGoBack} 
              className="bg-black text-[var(--yellow)] rounded-full text-4xl p-2 font-bold md:mx-[12rem] cursor-pointer" 
              />
              <h3 className="text-center font-semibold text-2xl py-2">Contact Us</h3>
              <p className="text-center text-lg pb-6 text-[#667085]">
                We’d love to hear from you. Please fill out this form.
              </p>
              <form onSubmit={ handleSubmit } className="flex flex-col gap-4 px-5 md:w-96 lg:w-1/2 mx-auto">
                <input
                  type="text"
                  onChange={handleChange}
                  name="from_name"
                  placeholder="First Name"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                />

                <input
                  type="email"
                  name="email_id"
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                />

                <div className="bg-black text-[var(--yellow)] rounded ">
                  <select onChange={handleChange} name="country_code" id="" className="text-xs h-8 placeholder-[var(--yellow)]">
                    <option value="USA">US</option>
                    <option value="IND">IND</option>
                    <option value="CHN">CHN</option>
                    <option value="FRA">FRA</option>
                    <option value="RUS">RUS</option>
                    <option value="SAU">SAU</option>
                  </select>
                  <input
                    type="tel"
                    onChange={handleChange}
                    name="mobile_no"
                    placeholder="+91 1234567890"
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

                <div className="flex gap-3 text-xs">
                  <input type="checkbox" />
                  <p>You agree to our friendly Privacy Policy.</p>
                </div>
                <button type="submit" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
