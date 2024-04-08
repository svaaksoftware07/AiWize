import { GiStarShuriken } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ProductPageVideo = () => {
  const listItems = [
    "No need of technical knowledge, business should be doing business",
    "What You See Is What You Get (WYSIWYG) concept for rules, policies and scorecards",
    "Simulations on Production data giving a major tool to visit the past, see trends and shape future",
    "Testing bulk data to envisage even before rules hit production",
    "Scalability to nth degree",
  ];

  return (
    <div className="flex flex-col xl:flex-row bg-black text-white py-10 h-auto md:h-screen">
      <div className="relative  mb-5 h-[50vh] xl:h-[50vh] w-full xl:w-1/2">
        <img src="/assets/images/chankaya/ProductPageVideo.png" alt="" className="absolute z-10 top-5 left-[16%] w-[65%] rounded-sm opacity-70 xl:left-[25%] md:w-[65%]"/>
        <img src="/assets/images/chankaya/ProductPageVideo.png" alt="" className="absolute z-20 top-10 left-[22%] w-[65%] rounded-sm opacity-80 xl:left-[28%] md:w-[65%]"/>
        <img src="/assets/images/chankaya/ProductPageVideo.png" alt="" className="absolute z-30 top-14 left-[26%] w-[65%] rounded-sm opacity-100 xl:left-[31%] md:w-[65%]"/>
      </div>


      <div className="w-full xl:w-[50%] flex flex-col justify-center gap-5 px-[10vw] md:px-[5vw] py-10">
        <div>
          <h5 className="text-[#FFDA14] font-bold">What’s in it for the User -</h5>
          <h3 className="text-[7vw] md:text-[3.1vw] leading-10 font-medium">THE CORE MISSION BEHIND ALL OUR WORK- </h3>
        </div>
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="flex gap-5 text-[16px] py-2">
              <GiStarShuriken className="mt-1 text-[#FFDA14]" /> {item}
            </li>
          ))}
        </ul>
        <button className="flex gap-2 px-4 py-1 bg-[#FBFBFB] text-black w-fit rounded-full font-semibold">
          <IoIosArrowDroprightCircle className="my-1 text-[1.1rem] bg-[#FFDA14] rounded-full"/>
          Watch More Videos
        </button>
      </div>
    </div>
  );
};

export default ProductPageVideo;
