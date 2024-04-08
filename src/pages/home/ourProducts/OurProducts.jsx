import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

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
      span: "x",
      description: "RAPID DEVELOPMENT MA",
      span2: "X",
      description2: "IMIZED"
    }
  ];

  const [index, setIndex] = useState(0)
  const [result,setResult]=useState(true)

  const nexthandler = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    }
  }

  const backhandler = () => {
    if (index >= 1) {
      setIndex(index - 1);
    }
  };

  useEffect(()=>{
    let count = index % 2 === 0 ? false : true;
    setResult(count)
  },[index])

  return (
    <div className="OurProduct h-auto">
      <h1 className="text-center heading_1 pb-6 w-100">
        Our <span>Products</span> & <span>Services</span>
      </h1>
      <div className="our-product-main">
        {products.map((product, index) => (
          <div key={index} className="OurProduct_div mobile-hide">
            <div>
              <h3>{product.name}<sup>{product?.span2}</sup></h3>
              <p>{product.description}<sup>{product?.span2}</sup>{product?.description2}</p>
              <BsArrowUpRightSquareFill className="OurProduct_arrow" /></div>
          </div>
        ))}
      </div>

      <div className="our-product-main_mobile over-product-hide hidden">
        <div className={`OurProduct_div_mobile ${result?"even_div_product":"odd_div_product"}`} >
          <div>
            <h3>{products[index].name}<sup>{products[index]?.span2}</sup></h3>
            <p>{products[index].description}<sup>{products[index]?.span2}</sup>{products[index]?.description2}</p>
            <BsArrowUpRightSquareFill className="OurProduct_arrow" />
            <div className="product-next product-card-arrow" onClick={backhandler} >
              <MdNavigateBefore />
            </div>
            <div className="product-back product-card-arrow" onClick={nexthandler}>
              <MdNavigateNext />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OurProducts;
