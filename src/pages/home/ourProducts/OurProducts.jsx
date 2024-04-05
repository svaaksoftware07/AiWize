import "./style.css";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const OurProducts = () => {
  const products = [
    {
      name: "CHANKAYA",
      description: "BUSINESS RULE ENGINE"
    },
    {
      name: "NatFlow",
      description: "INTUITIVE ENTERPRISE JOURNEY BUILDER"
    },
    {
      name: "PayYes",
      description: "ENTERPRISE COLLECTIONS SUITE"
    },
    {
      name: "RADM",
      span:"x",
      description: "RAPID DEVELOPMENT MA",
      span2:"X",
      description2:"IMIZED"
    }
  ];

  return (
    <div className="OurProduct h-screen">
      <h1 className="text-center heading_1 pb-10">
        Our <span>Products</span> & <span>Services</span>
      </h1>
      <div className="flex justify-center gap-5">
        {products.map((product, index) => (
          <div key={index} className="OurProduct_div">
            <div>
              <h3>{product.name}<sup>{product?.span2}</sup></h3>
              <p>{product.description}<sup>{product?.span2}</sup>{product?.description2}</p>
              <BsArrowUpRightSquareFill className="OurProduct_arrow" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
