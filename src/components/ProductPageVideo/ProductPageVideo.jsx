import { GiStarShuriken } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./style.css";
import { useState } from "react";
const ProductPageVideo = () => {
  const listItems = [
    "No need of technical knowledge, business should be doing business",
    "What You See Is What You Get (WYSIWYG) concept for rules, policies and scorecards",
    "Simulations on Production data giving a major tool to visit the past, see trends and shape future",
    "Testing bulk data to envisage even before rules hit production",
    "Scalability to nth degree",
  ];

  const [ImageData, setImageData] = useState([
    {
      imgLine: "/images/chankaya/ProductPageVideo.png",
      css: "ProductPageVideo_img1",
    },
    {
      imgLine: "/images/chankaya/ProductPageVideo.png",
      css: "ProductPageVideo_img2",
    },
    {
      imgLine: "/images/chankaya/ProductPageVideo.png",
      css: "ProductPageVideo_img3",
    },
  ]);

  const handleClick = (index) => {
    const newImageData = [...ImageData];

    const clickedCss = newImageData[index].css;
    newImageData[index].css = newImageData[2].css;
    newImageData[2].css = clickedCss;
    setImageData(newImageData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white py-10 xl:h-screen ProductPageVideo_Maindiv">
      <div className="relative mb-5 h-[320px] xl:h-[500px] w-full xl:w-1/2 ProductPageVideo_div">
        {ImageData.map((item, index) => (
          <img
            key={index}
            src={item.imgLine}
            alt=""
            className={`${item.css} cursor-pointer transition-all`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="w-full xl:w-[50%] flex flex-col justify-center gap-5 px-[10vw] md:px-[5vw] py-10">
        <div>
          <h5 className="text-[#FFDA14] font-bold">
            What’s in it for the User -
          </h5>
          <h3 className="text-[7vw] md:text-[2.8vw] leading-[3rem] font-medium">
            THE CORE MISSION BEHIND ALL OUR WORK-{" "}
          </h3>
        </div>
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="flex gap-5 text-[16px] py-2">
              <GiStarShuriken className="mt-1 text-[#FFDA14]" /> {item}
            </li>
          ))}
        </ul>
        <button className="flex gap-2 px-4 py-1 bg-[#FBFBFB] text-black w-fit rounded-full font-semibold">
          <IoIosArrowDroprightCircle className="my-1 text-[1.1rem] bg-[#FFDA14] rounded-full" />
          Watch More Videos
        </button>
      </div>
    </div>
  );
};

export default ProductPageVideo;
