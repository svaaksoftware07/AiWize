import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import blogs from "../../../assets/BlogData.json";

const AllBlogs = () => {
  const navigate = useNavigate();
  function handleBlog(id){
    navigate(`/blog/${id}`);
  }
  useEffect(() => {
    Aos.init({
        disable: 'mobile',
        duration: 2000
    })
}, [])

  return (
    <div
     data-aos="fade-right"
     className="flex flex-col py-0 h-auto bg-white md:h-[700px] xl:h-screen"
     >
      <div>
        <h1 className="text-center heading_1 pb-6">
          Explore All Blogs
        </h1>
      </div>
      <div className="md:flex justify-center flex-wrap gap-10 p-4 h-auto " >
        {blogs.map((blog, index) => (
          <div key={index} className="w-100 md:w-[20%] flex flex-col gap-3 md:gap-5 h-full md:h-[450px] relative ">
            <img src={blog.image} alt="" className="w-100 h-100 object-cover"/>
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500">{blog.date}</span>
            <h3 className="font-medium text-base leading-6">
              {blog.title}
            </h3>
            <div className="flex justify-center md:justify-start md:absolute bottom-0 ">
            <button className="bg-[var(--yellow)] w-[150px] rounded-full p-2  mb-4" onClick={() => handleBlog(blog.id)}> Read More </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex md:hidden justify-center flex-wrap gap-10 p-4 pb-16 ">
          <div className="w-screen  flex flex-col gap-5 h-[410px] relative">
            <img src={blogs[0].image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500 text-center">{blogs[0].date}</span>
            <h3 className="font-medium text-xl leading-5 text-center">
              {blogs[0].title}
            </h3>
            <div className="flex justify-center flex-row items-center py-5">
            <button className="bg-[var(--yellow)]  button w-[150px] " onClick={() => handleBlog(blogs[0].id)}> Read More </button>
            </div>
          </div>
      </div> */}
    </div>
  );
};

export default AllBlogs;
