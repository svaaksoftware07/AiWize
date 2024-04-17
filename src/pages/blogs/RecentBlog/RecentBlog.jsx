import { useState } from "react";
import blogData from "../../../assets/BlogData.json";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

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
    <div className="flex flex-col justify-start mt-10 items-center h-auto pb-20 md:pb-0 md:min-h-screen BlogGradient">
      <div className="w-full flex justify-center text-3xl lg:text-5xl font-bold bg-white py-8">
        Our Recent <span className="text-[var(--yellow)] mx-2"> BLOGS</span>
      </div>
      <div className="flex items-center justify-center gap-6">
        <IoIosArrowRoundBack
          className="text-3xl cursor-pointer border-2 border-[var(--yellow)] text-[var(--yellow)] hover:bg-[var(--yellow)] rounded-full hover:text-black hidden md:block "
          onClick={backhandler}
        />
        <div className="flex flex-col md:flex-row justify-center items-center pt-10 md:pt-0 w-11/12 lg:w-3/4 lg:p-10 h-full bg-[var(--yellow)] shadow-lg px-4">
        <div className="flex flex-col md:flex-row justify-center items-center h-auto">
          <div className="w-full lg:w-1/2 bg-white text-black py-6 px-2 lg:p-10 flex flex-col text-center h-[350px] md:text-left items-center md:items-start overflow-hidden">
            <h3 className="text-xl md:text-sm lg:text-2xl font-semibold">
              {blogData[index]?.title.slice(0, 70)}
            </h3>
            <div className="overflow-y-hidden hover:overflow-auto max-h-full">
              <p className="text-sm xl:text-base my-2">
                {blogData[index]?.BlogData[1]?.content}
              </p>
            </div>
            <button className="bg-black text-[var(--yellow)] text-base w-full md:w-[250px] rounded-full p-4 lg:py-3 my-3" onClick={() => handleNavigate(blogData[index]?.id)}>
              Read Now
            </button>
          </div>
          <img src={blogData[index]?.image} alt="" className="w-full hidden md:block lg:w-1/2 h-[350px]" />
        </div>
          <div className="flex gap-10 py-4">
            <IoIosArrowRoundBack
              className="text-3xl cursor-pointer border-2 border-white text-white hover:bg-black rounded-full hover:text-[var(--yellow)] hover:border-0 block md:hidden "
              onClick={backhandler}
            />
            <IoIosArrowRoundForward
              className="text-3xl cursor-pointer border-2 border-white text-white hover:bg-black rounded-full hover:text-[var(--yellow)] hover:border-0 block md:hidden "
              onClick={nexthandler}
            />
          </div>
        </div>
        <IoIosArrowRoundForward
          className="text-3xl cursor-pointer border-2 border-[var(--yellow)] text-[var(--yellow)] hover:bg-[var(--yellow)] rounded-full hover:text-black hidden md:block "
          onClick={nexthandler}
        />
      </div>
    </div>
  );
};

export default RecentBlog;
