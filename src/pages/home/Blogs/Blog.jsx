import Aos from "aos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import blogs from "../../../assets/BlogData.json";

const Blog = () => {
  let { id: indexValue } = useParams();
  indexValue = Number(indexValue);
  if (isNaN(indexValue) || indexValue === 3){
    indexValue=1;
  }

  const navigate = useNavigate();

  function handleBlog(id) {
    navigate(`/blog/${id}`);
  }

  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration: 2000
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="flex flex-col py-10 bg-white mb-6"
    >
      <div>
        <h1 className="text-center heading_1 pb-6">Explore All Blogs</h1>
      </div>
      <div className="hidden md:flex justify-center flex-wrap gap-10 ">
        {blogs.map((blog, index) => (
          <div key={index} className="w-[60%] md:w-[20%] flex flex-col gap-5 h-[410px] relative">
            <img src={blog.image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500">{blog.date}</span>
            <h3 className="font-medium text-base leading-5">
              {blog.title}
            </h3>
            <button className="bg-[var(--yellow)] py-2 px-3 rounded-full absolute bottom-0 left-0" onClick={() => handleBlog(blog.id)}> Read More </button>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center flex-wrap gap-10 p-4 pb-16 ">
        <div className="w-screen  flex flex-col gap-5 h-[410px] relative">
          {indexValue < blogs.length && (
            <>
              <img src={blogs[indexValue].image} alt="" />
              <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500 text-center">{blogs[indexValue].date}</span>
              <h3 className="font-medium text-xl leading-7 text-center">
                {blogs[indexValue].title}
              </h3>
              <div className="flex justify-center flex-row items-center py-5">
                <button className="bg-[var(--yellow)]  button w-[150px]" onClick={() => handleBlog(blogs[indexValue].id)}> Read More </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
