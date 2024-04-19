/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import { IoReturnUpBack } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";


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
    product_name: "",
    message: ""
  });

  // send email 
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `${import.meta.env.VITE_URL}/request-demo.php?name=${emailData.from_name}&mobile=${emailData.country_code}${emailData.mobile_no}&email=${emailData.email_id}&organizationName=${emailData.organization_name}&productName=${emailData.product_name}&comments=${emailData.message}&key=${import.meta.env.VITE_KEY}`
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
      <div className="grid place-content-center">
        <div>
          <div className="contact-background">

            <div className="contactUs_modal_container lg:mt-5">
              <IoReturnUpBack onClick={handleGoBack} className="bg-[var(--yellow)] text-[black] rounded-full text-4xl p-2 font-bold md:mx-[12rem] cursor-pointer" />
              <h3 className="text-center font-semibold text-xl lg:text-2xl py-2">Request A Free Demo</h3>
              <p className="text-center text-base lg:text-lg pb-3 lg:pb-6 text-[#667085]">
                We’d love to hear from you. Please fill out this form.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 md:w-96 lg:w-1/2 mx-auto">
                <input
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Full Name"
                  name="from_name"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  required
                  autoComplete="off"
                  name="email_id"
                  placeholder="Email Id"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                  onChange={handleChange}
                />
                <div className="bg-black rounded ">
                  <select required onChange={handleChange} name="country_code" id="" className="text-xs h-8 placeholder-[var(--yellow)] text-[var(--yellow)]">
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
                    autoComplete="off"
                    name="mobile_no"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    className="w-[70%] outline-none text-xs h-8 placeholder-[var(--yellow)]"
                  />
                </div>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  name="organization_name"
                  onChange={handleChange}
                  placeholder="Name of the Organisation"
                  className="text-xs h-8 placeholder-[var(--yellow)]"
                />
                <label htmlFor="product" className="text-sm leading-[1px]">Choose a Product</label>
                <select required onChange={handleChange} name="product_name" id="product" className="text-xs h-8 placeholder-[var(--yellow)] text-[var(--yellow)]">
                  <option value="">Select</option>
                  <option value="CHANAKYA">CHANAKYA</option>
                  <option value="NatFlow">NatFlow</option>
                  <option value="PayYes">PayYes</option>
                  <option value="RADMX">RADMX</option>
                </select>

                <label htmlFor="textarea" className="text-sm leading-[1px]">Tentative Use Case/Comments</label>
                <textarea
                  name="message"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  id="textarea"
                  cols="5"
                  rows="5"></textarea>
                <div className="flex gap-1">
                  <input type="checkbox"
                    required />
                  <p className="text-[12px]">You agree to our friendly <Link to={"/privacy-policy"} target="_blank" className="text-blue-950 underline"> Privacy Policy.</Link></p>
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

export default RequestPage;
