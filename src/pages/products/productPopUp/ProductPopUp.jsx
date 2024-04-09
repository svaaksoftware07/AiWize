/* eslint-disable react/prop-types */
import { IoReturnUpBack } from "react-icons/io5";
import "./style.css";

const ProductPopUp = ({setShowPopup1}) => {
  const handleGoBack = () => {
    setShowPopup1(false);
  };

  const products = [
    {
      name: "CHANAKYA",
      description: "The Generative AI Based Business Rule Engine"
    },
    {
      name: "NatFlow",
      description: "Intuitive Enterprise Journey Builder"
    },
    {
      name: "PayYes",
      description: "Enterprise Collections Suite"
    },
    {
      name: <>RADM <sup>X</sup> </>,
      description: "Rapid Application Development Maximized"
    }
  ];

  return (

    <>
    <style>
        {`  html, body { overflow: hidden;} `}
      </style>
        <div className="ProductPopUp_modal_wrapper" onClick={handleGoBack}></div>

        <div className="ProductPopUp_modal_container ">
          <div className="flex gap-5">
            <IoReturnUpBack onClick={handleGoBack} className="bg-[#FFDA14] rounded-full text-4xl p-2 font-bold text-black" />
            <h3 className="text-xl text-gray-400 flex items-center">Our Products & Services</h3>
          </div>
          <div className="flex flex-wrap pl-0 md:pl-14 py-10 product_popup_div">  
            {products.map((product, index) => (
              <div key={index} className={`w-1/2 py-2`}>
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
