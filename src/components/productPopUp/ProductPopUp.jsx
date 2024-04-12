/* eslint-disable react/prop-types */
import { IoReturnUpBack } from "react-icons/io5";
import "./style.css";
import {useNavigate} from "react-router-dom"
const ProductPopUp = ({ setShowPopup1 }) => {
  const handleGoBack = () => {
    setShowPopup1(false);
  };

  const products = [
    {
      name: "CHANAKYA",
      description: "The Generative AI Based Business Rule Engine",
      url: "/product/CHANAKYA"
    },
    {
      name: "NatFlow",
      description: "Intuitive Enterprise Journey Builder",
      url: "/product/NatFlow"

    },
    {
      name: "PayYes",
      description: "Enterprise Collections Suite",
      url: "/product/PayYes"

    },
    {
      name: <>RADM <sup>X</sup> </>,
      description: "Rapid Application Development Maximized",
      url: "/product/RADM"

    }
  ];

  const navigate=useNavigate()
  function itemclickhandler(url){
    handleGoBack()
    navigate(url)
  }
  return (
    <>
      <style>
        {`  html, body { overflow: hidden;} `}
      </style>
      <div className="ProductPopUp_modal_wrapper cursor-pointer" onClick={handleGoBack}></div>

      <div className="ProductPopUp_modal_container ">
        <div className="flex gap-5">
          <IoReturnUpBack onClick={handleGoBack} className="bg-[#FFDA14] rounded-full text-4xl p-2 font-bold text-black cursor-pointer" />
          <h3 className="text-xl text-gray-400 flex items-center">Our Products & Services</h3>
        </div>
        <div className="flex flex-wrap pl-0 md:pl-14 py-10 product_popup_div">
          {products.map((product, index) => (
            <div key={index} className={`w-100 md:w-1/2 py-2 cursor-pointer`} onClick={()=>itemclickhandler(product.url)}>
              <h3 className="text-yellow-300 text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPopUp;
