import Aos from "aos";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import blogs from "../../../assets/BlogData.json";

const Blog = () => {
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
     className="flex flex-col py-10 bg-white md:h-[700px] xl:h-screen"
     >
      <div>
        <h1 className="text-center heading_1 pb-6">
          Our Recent Blogs
        </h1>
      </div>
      <div className="hidden md:flex justify-center flex-wrap gap-10 " >
        {blogs.map((blog, index) => (
          <div key={index} className="w-[60%] md:w-[20%] flex flex-col gap-5 h-[410px] relative">
            <img src={blog.image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500">{blog.date}</span>
            <h3 className="font-medium text-base leading-5">
              {blog.title}
            </h3>
            <button className="bg-[var(--yellow)]  button w-[150px] absolute bottom-0 left-0" onClick={() => handleBlog(blog.id)}> Read More </button>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center flex-wrap gap-10 p-4 ">
          <div className="w-screen  flex flex-col gap-5 h-[410px] relative">
            <img src={blogs[0].image} alt="" />
            <span className="text-gray-500 text-xs py-1 border-b-[1px] border-gray-500 text-center">{blogs[0].date}</span>
            <h3 className="font-medium text-lg leading-5 text-center">
              {blogs[0].title}
            </h3>
            <div className="flex justify-center flex-row items-center ">
            <button className="bg-[var(--yellow)]  button w-[150px] "> Read More </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Blog;
