/* eslint-disable react/prop-types */
import "./style.css";
import { Helmet } from "react-helmet";
import { IoReturnUpBack } from "react-icons/io5";
import {  useState } from "react";
import { Link } from "react-router-dom";

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
    window.location.href =`${import.meta.env.VITE_URL}/contact.php?name=${emailData.from_name}&mobile=${emailData.country_code}${emailData.mobile_no}&email=${emailData.email_id}&organizationName=${emailData.organization_name}&key=${import.meta.env.VITE_KEY}`
    handleGoBack()
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
              className="bg-[var(--yellow)] text-[black] rounded-full text-4xl p-2 font-bold md:mx-[12rem] cursor-pointer" 
              />
              <h3 className="text-center font-semibold text-2xl py-2">Contact Us</h3>
              <p className="text-center text-lg pb-6 text-[#667085]">
                We’d love to hear from you. Please fill out this form.
              </p>
              <form onSubmit={ handleSubmit } className="flex flex-col gap-4 px-5 md:w-96 lg:w-1/2 mx-auto">
                <input
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  name="from_name"
                  placeholder="Full Name"
                  className="text-xs h-8 placeholder-[var(--yellow)] contact_input"
                />

                <input
                  type="email"
                  required
                  name="email_id"
                  onChange={handleChange}
                  placeholder="Email Id"
                  className="text-xs h-8 placeholder-[var(--yellow)] contact_input"
                />

                <div className="bg-black text-[var(--yellow)] rounded ">
                  <select onChange={handleChange} required name="country_code" id="" className="text-xs h-8 placeholder-[var(--yellow)]">
                    <option value="+91">IND</option>
                    <option value="+1">US</option>
                    <option value="+86">CHN</option>
                    <option value="+33">FRA</option>
                    <option value="+7">RUS</option>
                    <option value="+966">SAU</option>
                  </select>
                  <input
                    type="tel"
                    required
                    onChange={handleChange}
                    name="mobile_no"
                    placeholder="Mobile Number"
                    className="w-[70%] outline-none text-xs h-8 placeholder-[var(--yellow)] contact_input"
                  />
                </div>

                <input
                  type="text"
                  autoComplete="off"
                  required
                  name="organization_name"
                  onChange={handleChange}
                  placeholder="Name of the Organisation"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                />

                <div className="flex gap-3 text-xs">
                  <input type="checkbox"
                  required
                   />
                  <p>You agree to our friendly <Link to={"/privacy-policy"} target="_blank" className="text-blue-950 underline"> Privacy Policy.</Link></p>
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
