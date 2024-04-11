import { useState } from "react";
import blogData from "../../../assets/BlogData.json";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const RecentBlog = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const nexthandler = () => {
    if (index < blogData.length - 1) {
      setIndex(index + 1);
    }
  };

  const backhandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  function handleNavigate(id) {
    navigate(`/blog/${id}`);
  }

  return (
    <div className="flex flex-col justify-start mt-10 items-center min-h-screen BlogGradient">
      <div className="w-full flex justify-center text-3xl lg:text-5xl font-bold bg-white py-8">
        Our Recent <span className="text-yellow-500 mx-2"> BLOGS</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-11/12 lg:w-3/4 lg:px-10 lg:pb-10 h-full bg-yellow-500 shadow-lg px-4">
        <FaRegArrowAltCircleLeft className="text-3xl cursor-pointer hidden md:block" onClick={backhandler} />
        <div className="flex flex-col md:flex-row justify-center items-start w-full h-auto">
          <div className="w-full lg:w-1/2 bg-white text-black py-6 px-2 lg:p-10 flex flex-col text-center h-[350px] md:text-left items-center md:items-start ">
            <h3 className="text-xl md:text-sm lg:text-2xl font-semibold">{blogData[index]?.title.slice(0, 70)}</h3>
            <p className="text-xs md:text-xs lg:text-sm my-2">{blogData[index]?.BlogData[1]?.content.slice(0, 170)}</p>
            <button className="button bg-black text-yellow-500 text-xs w-48 py-2 lg:py-3 my-3" onClick={() => handleNavigate(blogData[index]?.id)}> Read Now </button>
          </div>
          <img src={blogData[index]?.image} alt="" className="w-full hidden md:block lg:w-1/2 h-[350px]" />
        </div>
        <div className="flex gap-10 pb-4">
          <FaRegArrowAltCircleLeft className="text-3xl cursor-pointer md:hidden" onClick={backhandler} />
          <FaRegArrowAltCircleRight className="text-3xl cursor-pointer md:hidden " onClick={nexthandler} />
        </div>
        <FaRegArrowAltCircleRight className="text-3xl cursor-pointer hidden md:block" onClick={nexthandler} />
      </div>
    </div>
  )
}

export default RecentBlog;
